<script>
    import { base } from "$app/paths";

    import P5 from "p5-svelte";
    import { get } from "svelte/store";
    import { colorMap } from "$lib/constants.js";
    import { markEntityLoopComplete } from "$lib/loopStatus";

    import {
        data,
        entities,
        clusters,
        curves,
        clusterPositions,
        highlightedEntities,
        config,
        stroke,
        speed,
        process,
        randomizeClusters,
        width,
        height,
        fontLoaded,
        stationaryCounts,
    } from "$lib/stores.js";

    let font;

    $: if (
        $config.clusterBy ||
        $config.moveBy ||
        $randomizeClusters ||
        $config.speed ||
        $curves
    ) {
        processClusters();
        updateEntityPositions();
        process.set(false);
    }

    const sketch = (s) => {
        s.preload = () => {
            font = s.loadFont(base + "/font/CircularStd-Book.otf", () => {
                fontLoaded.set(true);
            });
        };

        s.setup = () => {
            s.createCanvas(get(width), get(height));
            s.colorMode(s.HSL);
            s.background(0);

            if (get(data).length > 0) {
                processClusters();
                updateEntityPositions();
            }
        };

        s.draw = () => {
            s.background(0, 0.1);

            if (get(process)) {
                processClusters();
                updateEntityPositions();
                process.set(false);
            }

            drawStationaryEntityLoops(s);

            Object.values(get(entities)).forEach((entity) => {
                const isHighlighted = get(highlightedEntities).includes(
                    entity.moveBy,
                );
                processAndDrawEntity(
                    s,
                    entity,
                    isHighlighted,
                    $config.stroke || get(stroke),
                );
            });

            if (get(fontLoaded)) {
                drawClusterLabels(s);
            }
        };

        s.windowResized = () => {
            width.set(window.innerWidth);
            height.set(window.innerHeight - 200);
            s.resizeCanvas(get(width), get(height));
            s.background(get(width), get(height));

            updateEntityPositions();
        };
    };

    function processClusters() {
        const clusterMap = new Map();
        const tempEntities = {};

        get(data).forEach((d) => {
            const entityName = d[get(config).moveBy];
            const clusterKey = d[get(config).clusterBy];

            if (!tempEntities[entityName]) {
                tempEntities[entityName] = {
                    categories: [],
                    moveBy: entityName,
                    dataPoints: [],
                    currentCategoryIndex: 0,
                    position: { x: 0, y: 0 },
                    t: 0,
                    isStationary: true,
                    trail: [],
                };
            }

            tempEntities[entityName].dataPoints.push(d);
            tempEntities[entityName].categories.push(clusterKey);

            if (clusterKey !== tempEntities[entityName].categories[0]) {
                tempEntities[entityName].isStationary = false;
            }

            if (!clusterMap.has(clusterKey)) clusterMap.set(clusterKey, []);
            clusterMap.get(clusterKey).push(d);
        });

        entities.set(tempEntities);

        clusters.set(
            Array.from(clusterMap.entries()).sort(([keyA], [keyB]) =>
                !isNaN(keyA) && !isNaN(keyB)
                    ? +keyA - +keyB
                    : keyA.localeCompare(keyB),
            ),
        );
    }

    function updateEntityPositions() {
        const margin = 50;
        const xRadius = (get(width) - margin * 2) / 2;
        const yRadius = (get(height) - margin * 2) / 2;
        const tempClusterPositions = {};

        get(clusters).forEach(([clusterKey], i) => {
            const angle = (i / get(clusters).length) * Math.PI * 2;
            const position = get(randomizeClusters)
                ? {
                      x: margin + Math.random() * (get(width) - 2 * margin),
                      y: margin + Math.random() * (get(height) - 2 * margin),
                  }
                : {
                      x: get(width) / 2 + xRadius * Math.cos(angle),
                      y: get(height) / 2 + yRadius * Math.sin(angle),
                  };

            tempClusterPositions[clusterKey] = {
                x: position.x + (Math.random() - 0.5),
                y: position.y + (Math.random() - 0.5),
            };
        });

        clusterPositions.set(tempClusterPositions);

        const tempEntities = get(entities);
        const stationaryEntityCounts = {};

        Object.values(tempEntities).forEach((entity) => {
            const initialClusterKey = entity.categories[0];
            if (get(clusterPositions)[initialClusterKey]) {
                entity.position = {
                    ...get(clusterPositions)[initialClusterKey],
                };
                entity.t = 0;
                entity.currentCategoryIndex = 0;

                if (entity.isStationary) {
                    if (!stationaryEntityCounts[initialClusterKey]) {
                        stationaryEntityCounts[initialClusterKey] = 0;
                    }
                    stationaryEntityCounts[initialClusterKey]++;
                }
            }
        });

        entities.set(tempEntities);
        stationaryCounts.set(stationaryEntityCounts);
    }

    function processAndDrawEntity(
        s,
        entityData,
        isHighlighted,
        strokeWeightValue,
    ) {
        if (entityData.isStationary) {
            return;
        }

        const { categories, currentCategoryIndex, position } = entityData;
        let t = entityData.t || 0;

        const minSegmentLength = 1;
        const maxTrailSegments = 4;

        if (!entityData.trail) entityData.trail = [];

        if (categories.length > 0) {
            const startPos =
                get(clusterPositions)[
                    categories[currentCategoryIndex % categories.length]
                ];
            const endPos =
                get(clusterPositions)[
                    categories[(currentCategoryIndex + 1) % categories.length]
                ];

            if (startPos && endPos) {
                const controlPoint1 = {
                    x: startPos.x - 25,
                    y: startPos.y - 25,
                };
                const controlPoint2 = {
                    x: endPos.x + 25,
                    y: endPos.y + 25,
                };

                if (get(curves)) {
                    position.x = s.bezierPoint(
                        startPos.x,
                        controlPoint1.x - 50,
                        controlPoint2.x - 50,
                        endPos.x,
                        t,
                    );
                    position.y = s.bezierPoint(
                        startPos.y,
                        controlPoint1.y + 50,
                        controlPoint2.y + 50,
                        endPos.y,
                        t,
                    );
                } else {
                    position.x = s.lerp(startPos.x, endPos.x, t);
                    position.y = s.lerp(startPos.y, endPos.y, t);
                }

                const lastPoint = entityData.trail[entityData.trail.length - 1];
                if (
                    !lastPoint ||
                    dist(lastPoint, position) >= minSegmentLength
                ) {
                    entityData.trail.push({ ...position });
                    if (entityData.trail.length > maxTrailSegments) {
                        entityData.trail.shift();
                    }
                }

                const speedFactor =
                    0.003 * get(config).speed || 0.003 * get(speed);
                t += speedFactor;
                if (t > 1) {
                    t = 0;
                    entityData.currentCategoryIndex++;
                    if (entityData.currentCategoryIndex >= categories.length) {
                        entityData.currentCategoryIndex = 0;
                        if (isHighlighted) {
                            markEntityLoopComplete(entityData.moveBy);
                        }
                    }
                }

                entityData.t = t;

                const strokeColor =
                    get(highlightedEntities).length === 0 || isHighlighted
                        ? colorMap[get(config).clusterBy].start
                        : [0, 0, 40];

                s.noFill();
                s.stroke(...strokeColor);
                s.strokeWeight(
                    get(highlightedEntities).length === 0 || isHighlighted
                        ? strokeWeightValue
                        : 1,
                );
                s.strokeJoin(s.ROUND);

                s.beginShape();
                entityData.trail.forEach((point) => s.vertex(point.x, point.y));
                s.endShape();
            }
        }
    }

    function drawStationaryEntityLoops(s) {
        const counts = get(stationaryCounts);
        const clusterPos = get(clusterPositions);
        const speedFactor = 0.003 * get(config).speed || 0.003 * get(speed);

        if (!drawStationaryEntityLoops.trails) {
            drawStationaryEntityLoops.trails = {};
        }
        const trails = drawStationaryEntityLoops.trails;

        Object.keys(counts).forEach((clusterKey) => {
            const count = counts[clusterKey];
            const pos = clusterPos[clusterKey];

            if (pos) {
                const trailLength = 4;
                const minSegmentLength = 2;

                if (!trails[clusterKey]) {
                    trails[clusterKey] = {
                        t: Math.random(),
                        trail: [],
                    };
                }

                const clusterTrail = trails[clusterKey];
                clusterTrail.t += speedFactor;

                if (clusterTrail.t > 1) {
                    clusterTrail.t = 0;
                }

                const angle = clusterTrail.t * s.TWO_PI;
                const radius = 5 + Math.sqrt(count);
                const x = pos.x + radius * s.cos(angle);
                const y = pos.y + radius * s.sin(angle);
                const position = { x, y };

                const lastPoint =
                    clusterTrail.trail[clusterTrail.trail.length - 1];
                if (
                    !lastPoint ||
                    dist(lastPoint, position) >= minSegmentLength
                ) {
                    clusterTrail.trail.push(position);
                    if (clusterTrail.trail.length > trailLength) {
                        clusterTrail.trail.shift();
                    }
                }

                const isClusterHighlighted =
                    get(highlightedEntities).length === 0 ||
                    get(highlightedEntities).some((entityName) => {
                        const entity = get(entities)[entityName];
                        return (
                            entity &&
                            entity.categories.includes(clusterKey) &&
                            entity.isStationary
                        );
                    });

                const strokeColor =
                    isClusterHighlighted && colorMap[get(config).clusterBy]
                        ? colorMap[get(config).clusterBy]?.start
                        : [0, 0, 40];

                s.noFill();
                s.stroke(...strokeColor);

                s.strokeWeight(
                    isClusterHighlighted ? $config.stroke || get(stroke) : 1,
                );
                s.strokeJoin(s.ROUND);

                s.beginShape();
                clusterTrail.trail.forEach((point) =>
                    s.vertex(point.x, point.y),
                );
                s.endShape();
            }
        });
    }

    function dist(point1, point2) {
        return Math.sqrt(
            Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2),
        );
    }

    function drawClusterLabels(s) {
        s.fill(...(colorMap[get(config).clusterBy]?.start || [0, 0, 40]));
        s.noStroke();
        s.textFont(font);

        get(clusters).forEach(([clusterKey]) => {
            const pos = get(clusterPositions)[clusterKey];
            if (pos) {
                s.push();
                if (get(randomizeClusters)) {
                    s.translate(pos.x, pos.y);
                } else {
                    let angle = Math.atan2(
                        pos.y - get(height) / 2,
                        pos.x - get(width) / 2,
                    );
                    if (angle > Math.PI / 2 || angle < -Math.PI / 2) {
                        angle += Math.PI;
                        s.textAlign(s.RIGHT, s.BOTTOM);
                    } else {
                        s.textAlign(s.LEFT, s.TOP);
                    }
                    s.translate(pos.x, pos.y);
                    s.rotate(angle);
                }
                s.textSize(14);
                s.text(clusterKey, 0, 0);
                s.pop();
            }
        });
    }
</script>

<P5 {sketch} />

<style>
    :global(canvas) {
        display: block;
    }
</style>
