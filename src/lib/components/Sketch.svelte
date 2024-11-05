<script>
    import P5 from "p5-svelte";
    import { get } from "svelte/store";
    import { base } from "$app/paths";
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
    import { colorMap } from "$lib/constants.js";

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
            s.frameRate(60);

            if (get(data).length > 0) {
                processClusters();
                updateEntityPositions();
            }
        };

        s.draw = () => {
            s.background(0, 0.1);

            const entitiesData = get(entities);
            const highlightedEntitiesData = get(highlightedEntities);
            const clustersData = get(clusters);
            const clusterPositionsData = get(clusterPositions);
            const curvesData = get(curves);
            const configData = get(config);
            const strokeWeightValue = configData.stroke || get(stroke);
            const fontLoadedData = get(fontLoaded);
            const speedValue = configData.speed || get(speed);
            const stationaryCountsData = get(stationaryCounts);
            const randomizeClustersData = get(randomizeClusters);

            if (get(process)) {
                processClusters();
                updateEntityPositions();
                process.set(false);
            }

            drawStationaryEntityLoops(
                s,
                entitiesData,
                stationaryCountsData,
                clusterPositionsData,
                highlightedEntitiesData,
                configData,
                strokeWeightValue,
                speedValue,
            );

            const entitiesByStyle = {
                highlighted: [],
                normal: [],
            };

            Object.values(entitiesData).forEach((entity) => {
                if (entity.isStationary) return;

                const isHighlighted =
                    highlightedEntitiesData.length === 0 ||
                    highlightedEntitiesData.includes(entity.moveBy);

                if (isHighlighted) {
                    entitiesByStyle.highlighted.push(entity);
                } else {
                    entitiesByStyle.normal.push(entity);
                }
            });

            if (entitiesByStyle.highlighted.length > 0) {
                entitiesByStyle.highlighted.forEach((entity) => {
                    processAndDrawEntity(
                        s,
                        entity,
                        true,
                        clusterPositionsData,
                        curvesData,
                        speedValue,
                        strokeWeightValue,
                        configData,
                        highlightedEntitiesData,
                    );
                });
            }

            if (entitiesByStyle.normal.length > 0) {
                entitiesByStyle.normal.forEach((entity) => {
                    processAndDrawEntity(
                        s,
                        entity,
                        false,
                        clusterPositionsData,
                        curvesData,
                        speedValue,
                        strokeWeightValue,
                        configData,
                        highlightedEntitiesData,
                    );
                });
            }

            if (fontLoadedData) {
                drawClusterLabels(
                    s,
                    clustersData,
                    clusterPositionsData,
                    configData,
                    randomizeClustersData,
                );
            }
        };

        s.windowResized = () => {
            width.set(window.innerWidth);
            height.set(window.innerHeight - 200);
            s.resizeCanvas(get(width), get(height));
            s.background(0);

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
        clusterPositionsData,
        curvesData,
        speedValue,
        strokeWeightValue,
        configData,
        highlightedEntitiesData,
    ) {
        if (entityData.isStationary) {
            return;
        }

        const isEntityHighlighted =
            highlightedEntitiesData.length === 0 || isHighlighted;

        const strokeColor =
            isEntityHighlighted && colorMap[configData.clusterBy]
                ? colorMap[configData.clusterBy]?.start
                : [0, 0, 20];

        s.stroke(...strokeColor);
        s.strokeWeight(isEntityHighlighted ? strokeWeightValue : 1);
        s.noFill();
        s.strokeJoin(s.ROUND);

        const categories = entityData.categories;
        const currentIndex = entityData.currentCategoryIndex;
        const position = entityData.position;
        let t = entityData.t || 0;

        const minSegmentLength = 1;
        const maxTrailSegments = 4;

        if (!entityData.trail) entityData.trail = [];

        if (categories.length > 0) {
            const startClusterKey =
                categories[currentIndex % categories.length];
            const endClusterKey =
                categories[(currentIndex + 1) % categories.length];

            const startPos = clusterPositionsData[startClusterKey];
            const endPos = clusterPositionsData[endClusterKey];

            if (startPos && endPos) {
                let currentPosition = { x: 0, y: 0 };

                if (startClusterKey === endClusterKey) {
                    const offsetRadius = 5;
                    const angle = s.TWO_PI * t;
                    currentPosition.x =
                        startPos.x + offsetRadius * s.cos(angle);
                    currentPosition.y =
                        startPos.y + offsetRadius * s.sin(angle);
                } else {
                    if (curvesData) {
                        const control1X =
                            startPos.x + (endPos.x - startPos.x) / 2;
                        const control1Y = startPos.y;
                        const control2X = endPos.x;
                        const control2Y =
                            startPos.y + (endPos.y - startPos.y) / 2;

                        currentPosition.x = s.bezierPoint(
                            startPos.x,
                            control1X,
                            control2X,
                            endPos.x,
                            t,
                        );
                        currentPosition.y = s.bezierPoint(
                            startPos.y,
                            control1Y,
                            control2Y,
                            endPos.y,
                            t,
                        );
                    } else {
                        currentPosition.x = s.lerp(startPos.x, endPos.x, t);
                        currentPosition.y = s.lerp(startPos.y, endPos.y, t);
                    }
                }

                const trail = entityData.trail;
                const lastPoint = trail[trail.length - 1];
                if (
                    !lastPoint ||
                    distSquared(lastPoint, currentPosition) >=
                        minSegmentLength * minSegmentLength
                ) {
                    if (trail.length >= maxTrailSegments) {
                        trail.shift();
                    }
                    trail.push({ x: currentPosition.x, y: currentPosition.y });
                }

                const speedFactor = 0.004 * speedValue;
                t += speedFactor;
                if (t > 1) {
                    t = 0;
                    entityData.currentCategoryIndex =
                        (currentIndex + 1) % categories.length;
                    if (
                        entityData.currentCategoryIndex === 0 &&
                        isHighlighted
                    ) {
                        markEntityLoopComplete(entityData.moveBy);
                    }
                }

                entityData.t = t;
                position.x = currentPosition.x;
                position.y = currentPosition.y;

                s.beginShape();
                for (let i = 0; i < trail.length; i++) {
                    const point = trail[i];
                    s.vertex(point.x, point.y);
                }
                s.endShape();
            }
        }
    }

    function drawStationaryEntityLoops(
        s,
        entitiesData,
        stationaryCountsData,
        clusterPositionsData,
        highlightedEntitiesData,
        configData,
        strokeWeightValue,
        speedValue,
    ) {
        const counts = stationaryCountsData;
        const speedFactor = 0.004 * speedValue;

        if (!drawStationaryEntityLoops.trails) {
            drawStationaryEntityLoops.trails = {};
        }
        const trails = drawStationaryEntityLoops.trails;

        Object.keys(counts).forEach((clusterKey) => {
            const count = counts[clusterKey];
            const pos = clusterPositionsData[clusterKey];

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
                    distSquared(lastPoint, position) >=
                        minSegmentLength * minSegmentLength
                ) {
                    if (clusterTrail.trail.length >= trailLength) {
                        clusterTrail.trail.shift();
                    }
                    clusterTrail.trail.push(position);
                }

                const isClusterHighlighted =
                    highlightedEntitiesData.length === 0 ||
                    highlightedEntitiesData.some((entityName) => {
                        const entity = entitiesData[entityName];
                        return (
                            entity &&
                            entity.categories.includes(clusterKey) &&
                            entity.isStationary
                        );
                    });

                const strokeColor =
                    isClusterHighlighted && colorMap[configData.clusterBy]
                        ? colorMap[configData.clusterBy]?.start
                        : [0, 0, 40];

                s.noFill();
                s.stroke(...strokeColor);
                s.strokeWeight(isClusterHighlighted ? strokeWeightValue : 1);
                s.strokeJoin(s.ROUND);

                s.beginShape();
                clusterTrail.trail.forEach((point) =>
                    s.vertex(point.x, point.y),
                );
                s.endShape();
            }
        });
    }

    function distSquared(point1, point2) {
        const dx = point1.x - point2.x;
        const dy = point1.y - point2.y;
        return dx * dx + dy * dy;
    }

    function drawClusterLabels(
        s,
        clustersData,
        clusterPositionsData,
        configData,
        randomizeClustersData,
    ) {
        s.fill(...(colorMap[configData.clusterBy]?.start || [0, 0, 40]));
        s.noStroke();
        s.textFont(font);

        clustersData.forEach(([clusterKey]) => {
            const pos = clusterPositionsData[clusterKey];
            if (pos) {
                s.push();
                if (randomizeClustersData) {
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
