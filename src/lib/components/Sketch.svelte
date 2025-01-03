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
        canvasStore,
        caption,
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
        process.set(false);
    }

    const sketch = (s) => {
        s.preload = () => {
            font = s.loadFont(base + "/font/CircularStd-Book.otf", () => {
                fontLoaded.set(true);
            });
        };

        s.windowResized = () => {
            $width = s.windowWidth;
            s.resizeCanvas(s.windowWidth, get(height));
            processClusters();
        };

        s.setup = () => {
            const canvas = s.createCanvas(get(width), get(height));
            canvasStore.set(canvas.canvas);

            s.colorMode(s.HSL);
            s.background(0);
            s.frameRate(30);
            if (get(data).length > 0) {
                processClusters();
            }
        };

        s.draw = () => {
            s.background(0, 0.1);
            const entitiesData = get(entities);
            const clustersData = get(clusters);
            const clusterPositionsData = get(clusterPositions);
            const curvesData = get(curves);
            const configData = get(config);
            const highlightedEntitiesData =
                configData.highlightedEntities || get(highlightedEntities);
            const strokeWeightValue = configData.stroke || get(stroke);
            const fontLoadedData = get(fontLoaded);
            const speedValue = configData.speed || get(speed);
            const stationaryCountsData = get(stationaryCounts);
            const randomizeClustersData = get(randomizeClusters);
            const maxStationaryCountData = Math.max(
                ...Object.values(stationaryCountsData),
            );

            if (get(process)) {
                processClusters();
                process.set(false);
            }

            drawStationaryEntityLoops(
                s,
                entitiesData,
                stationaryCountsData,
                maxStationaryCountData,
                clusterPositionsData,
                highlightedEntitiesData,
                configData,
                strokeWeightValue,
                speedValue,
                curvesData,
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

                s.textAlign(s.CENTER, s.CENTER);
                let margin = 600;

                if (get(width) < 600) {
                    s.textSize(12);
                    margin = 300;
                } else if (get(width) > 3000) {
                    s.textSize(40);
                    margin = 1000;
                } else {
                    s.textSize(14);
                }

                s.text(
                    get(config).caption || get(caption),
                    get(width) / 2 - margin / 2,
                    get(height) / 2,
                    margin,
                );
            }
        };
    };

    function processClusters() {
        const clusterMap = new Map();
        const tempEntities = {};
        const configData = get(config);

        get(data).forEach((d) => {
            const entityName = d[configData.moveBy];
            const clusterKey = d[configData.clusterBy];

            if (
                !entityName ||
                entityName === "NA" ||
                !clusterKey ||
                clusterKey === "NA"
            ) {
                return;
            }

            if (!tempEntities[entityName]) {
                tempEntities[entityName] = {
                    categories: [],
                    moveBy: entityName,
                    dataPoints: [],
                    currentCategoryIndex: 0,
                    position: null,
                    t: 0,
                    isStationary: true,
                    trail: [],
                    loopsCompleted: 0,
                    loopsToComplete: configData.loops || 1,
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

        updateEntityPositions();
    }

    function updateEntityPositions() {
        let margin = 30;

        // if (get(config).clusterBy == "sport") {
        //     margin = 50;
        // } else if (get(config).clusterBy == "city") {
        //     margin = 50;
        // } else if (get(config).clusterBy == "height") {
        //     margin = 20;
        // } else if (get(config).clusterBy == "year") {
        //     margin = 20;
        // } else if (get(config).clusterBy == "team") {
        //     margin = 40;
        // } else if (get(config).clusterBy == "weight") {
        //     margin = 20;
        // } else if (get(config).clusterBy == "age") {
        //     margin = 20;
        // } else if (get(config).clusterBy == "event") {
        //     margin = 150;
        // } else

        // if (get(width) < 600) {
        //     margin = 10;
        // } else if (get(width) > 3000) {
        //     margin = 0;
        // } else {
        //     margin = 30;
        // }

        const xRadius = (get(width) - margin * 2) / 2;
        const yRadius = (get(height) - margin * 1.5) / 2;
        const tempClusterPositions = {};

        const totalClusters = get(clusters).length;
        const startAngle = Math.PI;

        get(clusters).forEach(([clusterKey], i) => {
            const angle = startAngle + (i / totalClusters) * Math.PI * 2;
            tempClusterPositions[clusterKey] = {
                x: get(width) / 2 + xRadius * Math.cos(angle),
                y: get(height) / 2 + yRadius * Math.sin(angle),
            };
        });

        clusterPositions.set(tempClusterPositions);

        const tempEntities = get(entities);
        const stationaryEntityCounts = {};

        Object.values(tempEntities).forEach((entity) => {
            const initialClusterKey = entity.categories[0];
            if (tempClusterPositions[initialClusterKey]) {
                entity.position = {
                    ...tempClusterPositions[initialClusterKey],
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
        drawStationaryEntityLoops.trails = {};

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
        if (entityData.isStationary || !entityData.position) {
            return;
        }

        const isEntityHighlighted =
            highlightedEntitiesData.length === 0 || isHighlighted;

        const colorConfig = colorMap[configData.clusterBy] || {
            start: [0, 0, 100],
            end: [0, 0, 0],
        };

        const categories = entityData.categories;
        const currentIndex = entityData.currentCategoryIndex;
        const position = entityData.position;
        let t = entityData.t || 0;

        const startClusterKey = categories[currentIndex % categories.length];
        const endClusterKey =
            categories[(currentIndex + 1) % categories.length];
        const startPos = clusterPositionsData[startClusterKey];
        const endPos = clusterPositionsData[endClusterKey];

        if (startPos && endPos) {
            const strokeColor = entityData.isGoingBack
                ? [0, 0, 20]
                : getStrokeColor(
                      s,
                      entityData,
                      colorConfig,
                      t,
                      entityData.isGoingBack,
                  );

            strokeWeightValue = entityData.isGoingBack
                ? strokeWeightValue / 3
                : strokeWeightValue;

            s.stroke(isEntityHighlighted ? [...strokeColor] : [0, 0, 20]);
            s.strokeWeight(isEntityHighlighted ? strokeWeightValue : 0.5);
            s.noFill();
            s.strokeJoin(s.ROUND);

            let currentPosition = { x: null, y: null };
            if (curvesData) {
                const offsetRadius = 25;
                const controlPoint1 = {
                    x: startPos.x - offsetRadius / 2,
                    y: startPos.y - offsetRadius / 2,
                };
                const controlPoint2 = {
                    x: endPos.x + offsetRadius / 2,
                    y: endPos.y + offsetRadius / 2,
                };

                currentPosition.x = s.bezierPoint(
                    startPos.x,
                    controlPoint1.x - offsetRadius,
                    controlPoint2.x - offsetRadius,
                    endPos.x,
                    t,
                );
                currentPosition.y = s.bezierPoint(
                    startPos.y,
                    controlPoint1.y + offsetRadius,
                    controlPoint2.y + offsetRadius,
                    endPos.y,
                    t,
                );
            } else {
                currentPosition.x = s.lerp(startPos.x, endPos.x, t);
                currentPosition.y = s.lerp(startPos.y, endPos.y, t);
            }

            const trail = entityData.trail || [];
            const lastPoint = trail[trail.length - 1];
            const minSegmentLength = 1;

            if (
                !lastPoint ||
                distSquared(lastPoint, currentPosition) >=
                    minSegmentLength * minSegmentLength
            ) {
                if (trail.length >= 2) {
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

                if (entityData.currentCategoryIndex == categories.length - 1) {
                    entityData.isGoingBack = true;
                    if (
                        $markEntityLoopComplete !== true &&
                        !entityData.isStationary
                    ) {
                        $markEntityLoopComplete = true;
                    }
                } else {
                    entityData.isGoingBack = false;
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

    function getStrokeColor(s, entityData, colorConfig, t, isGoingBack) {
        const startColor = isGoingBack ? colorConfig.end : colorConfig.start;
        const endColor = isGoingBack ? colorConfig.start : colorConfig.end;

        let gradient = false;
        if (gradient) {
            let startHue = startColor[0];
            let endHue = endColor[0];
            if (Math.abs(endHue - startHue) > 180) {
                if (endHue > startHue) {
                    startHue -= 360;
                } else {
                    endHue += 360;
                }
            }

            return [
                (s.lerp(startHue, endHue, t) + 360) % 360,
                s.lerp(startColor[1], endColor[1], t),
                s.lerp(startColor[2], endColor[2], t),
            ];
        } else {
            return colorMap[get(config).clusterBy]?.start;
        }
    }

    function drawStationaryEntityLoops(
        s,
        entitiesData,
        stationaryCountsData,
        maxStationaryCountData,
        clusterPositionsData,
        highlightedEntitiesData,
        configData,
        strokeWeightValue,
        speedValue,
        curvesData,
    ) {
        const speedFactor = 0.004 * speedValue;

        if (!drawStationaryEntityLoops.trails) {
            drawStationaryEntityLoops.trails = {};
        }
        const trails = drawStationaryEntityLoops.trails;

        Object.keys(stationaryCountsData).forEach((clusterKey) => {
            const count = stationaryCountsData[clusterKey];
            const startPos = clusterPositionsData[clusterKey];
            const endPos = startPos;

            if (clusterKey && count && startPos) {
                if (!trails[clusterKey]) {
                    trails[clusterKey] = {
                        t: null,
                        trail: [],
                        isGoingBack: false,
                    };
                }

                const clusterTrail = trails[clusterKey];
                clusterTrail.t += speedFactor;

                if (clusterTrail.t > 1) {
                    clusterTrail.t = null;
                }

                const offsetRadius = 25;

                const t = clusterTrail.t;

                let currentPosition = { x: 0, y: 0 };

                if (curvesData) {
                    const controlPoint1 = {
                        x: startPos.x - offsetRadius / 2,
                        y: startPos.y - offsetRadius / 2,
                    };
                    const controlPoint2 = {
                        x: endPos.x + offsetRadius / 2,
                        y: endPos.y + offsetRadius / 2,
                    };

                    currentPosition.x = s.bezierPoint(
                        startPos.x,
                        controlPoint1.x - offsetRadius,
                        controlPoint2.x - offsetRadius,
                        endPos.x,
                        t,
                    );
                    currentPosition.y = s.bezierPoint(
                        startPos.y,
                        controlPoint1.y + offsetRadius,
                        controlPoint2.y + offsetRadius,
                        endPos.y,
                        t,
                    );
                }

                const minSegmentLength = 1;
                const lastPoint =
                    clusterTrail.trail[clusterTrail.trail.length - 1];
                if (
                    !lastPoint ||
                    distSquared(lastPoint, currentPosition) >=
                        minSegmentLength * minSegmentLength
                ) {
                    if (clusterTrail.trail.length >= 10) {
                        clusterTrail.trail.shift();
                    }
                    clusterTrail.trail.push(currentPosition);
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

                if (isClusterHighlighted && configData.clusterBy) {
                    const colorConfig = colorMap[configData.clusterBy] || {
                        start: [0, 0, 100],
                        end: [0, 0, 0],
                    };

                    const strokeColor = getStrokeColor(
                        s,
                        null,
                        colorConfig,
                        clusterTrail.t,
                        false,
                    );

                    const adjustedStrokeWeight = s.map(
                        count,
                        1,
                        maxStationaryCountData,
                        strokeWeightValue,
                        strokeWeightValue * 5,
                    );

                    s.noFill();
                    s.stroke(...strokeColor);
                    s.strokeWeight(
                        highlightedEntitiesData.length > 10
                            ? adjustedStrokeWeight
                            : configData.stroke || adjustedStrokeWeight,
                    );

                    s.strokeJoin(s.ROUND);

                    s.beginShape();
                    clusterTrail.trail.forEach((point) =>
                        s.vertex(point.x, point.y),
                    );
                    s.endShape();
                }
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
        s.fill(...(colorMap[configData.clusterBy]?.end || [0, 0, 20]));

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
                        s.textAlign(s.LEFT, s.LEFT);
                    } else {
                        s.textAlign(s.LEFT, s.TOP);
                        s.textAlign(s.RIGHT, s.RIGHT);
                    }
                    s.translate(pos.x, pos.y);
                    s.rotate(angle);
                }

                if (get(width) < 600) {
                    s.textSize(6);
                } else if (get(width) > 3000) {
                    s.textSize(20);
                } else {
                    s.textSize(12);
                }

                const wrappedText =
                    clusterKey.length < 22
                        ? clusterKey
                        : `${clusterKey.substring(0, 22)}...`;

                s.text(wrappedText, 0, 0);
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
