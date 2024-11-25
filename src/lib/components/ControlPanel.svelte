<script>
    import {
        config,
        highlightedEntities,
        entities,
        clusters,
    } from "$lib/stores.js";
    import { clusterOptions, filteredOptions } from "$lib/constants.js";
    import { get } from "svelte/store";

    let queryValue = $config.queryValue || "";

    function onQueryInput(event) {
        if (event.target.value.length > 3) {
            queryValue = event.target.value;
            config.update((c) => ({ ...c, queryValue }));
        }
    }

    const excludedClusterOptions = [];
    const excludedMoveOptions = [];

    $: reducedClusterOptions = filteredOptions.filter(
        (option) => !excludedClusterOptions.includes(option),
    );
    $: reducedMoveOptions = clusterOptions.filter(
        (option) => !excludedMoveOptions.includes(option),
    );

    $: uniqueClusterValues = $clusters.map(([clusterKey]) => clusterKey);

    $: filteredEntities = Object.entries($entities)
        .filter(([entityName, entityData]) => {
            const matchesCluster = $config.selectedClusterValue
                ? entityData.dataPoints.some(
                      (dp) =>
                          dp[$config.clusterBy]?.toString() ===
                          $config.selectedClusterValue.toString(),
                  )
                : true;

            const query = queryValue.toLowerCase();
            const category = $config.queryCategory || "name";
            const matchesQuery =
                query.length >= 3
                    ? entityData.dataPoints.some((dp) =>
                          dp[category]
                              ?.toString()
                              .toLowerCase()
                              .includes(query),
                      )
                    : true;

            return matchesCluster && matchesQuery;
        })
        .reduce((acc, [key, entityData]) => {
            acc[key] = entityData;
            return acc;
        }, {});

    function selectOption(type, option) {
        resetQueries();
        highlightedEntities.set([]);
        if (type === "clusterBy") {
            config.update((c) => ({ ...c, clusterBy: option }));
        } else if (type === "moveBy") {
            config.update((c) => ({ ...c, moveBy: option }));
        }
    }

    function selectClusterValue(value) {
        config.update((c) => ({ ...c, selectedClusterValue: value }));

        const query = queryValue.toLowerCase();
        const category = $config.queryCategory || "name";
        const tempHighlightedEntities = [];

        Object.entries(get(entities)).forEach(([entityName, entityData]) => {
            const matchesCluster = entityData.dataPoints.some(
                (dp) => dp[$config.clusterBy]?.toString() === value.toString(),
            );

            const matchesQuery = entityData.dataPoints.some((dp) =>
                dp[category]?.toString().toLowerCase().includes(query),
            );

            if (matchesCluster && matchesQuery) {
                tempHighlightedEntities.push(entityName);
                entityData.currentCategoryIndex = 0;
                entityData.t = 0;
                entityData.trail = [];
            }
        });

        highlightedEntities.set(tempHighlightedEntities);
    }

    function resetQueries() {
        config.update((c) => ({
            ...c,
            queryValue: "",
            selectedClusterValue: null,
        }));
        queryValue = "";
        highlightedEntities.set([]);
    }

    function copyConfig() {
        const currentConfig = {
            title: "",
            description: "",
            methodology: "",
            media: true,
            config: {
                clusterBy: $config.clusterBy,
                moveBy: $config.moveBy,
                selectedClusterValue: $config.selectedClusterValue || "",
                queryValue: queryValue,
                queryCategory: $config.queryCategory || "name",
                speed: $config.speed || 3,
                stroke: $config.stroke || 1,
                loops: $config.loopsToComplete || 1,
                highlightedEntities: get(highlightedEntities), //.join(","),
            },
        };

        const jsonString = JSON.stringify(currentConfig, null, 2);

        navigator.clipboard
            .writeText(jsonString)
            .then(() => {
                alert("Config copied to clipboard!");
            })
            .catch((err) => {
                console.error("Could not copy text: ", err);
            });
    }

    const minFontSize = 12;
    const maxFontSize = 30;

    $: entitiesList = Object.entries(filteredEntities).map(
        ([entityName, entityData]) => [
            entityName,
            entityData.dataPoints.length,
        ],
    );

    $: allValues = entitiesList.map(([_, value]) => value);

    $: minValue = allValues.length > 0 ? Math.min(...allValues) : 0;
    $: maxValue = allValues.length > 0 ? Math.max(...allValues) : 1;

    function getFontSize(value) {
        if (minValue === maxValue) {
            return minFontSize;
        }
        return (
            minFontSize +
            ((value - minValue) * (maxFontSize - minFontSize)) /
                (maxValue - minValue)
        );
    }

    const minClusterFontSize = 12;
    const maxClusterFontSize = 30;

    $: clusterValuesList = (() => {
        const entitiesArray = Object.values($entities);

        const highlightedSet = new Set($highlightedEntities);
        const isHighlightActive = highlightedSet.size > 0;

        let clustersToUse = uniqueClusterValues;
        const result = [];

        if (isHighlightActive) {
            clustersToUse = uniqueClusterValues.filter((clusterValue) => {
                for (let i = 0; i < entitiesArray.length; i++) {
                    const entity = entitiesArray[i];
                    if (
                        highlightedSet.has(entity.moveBy) &&
                        entity.categories.includes(clusterValue)
                    ) {
                        return true;
                    }
                }
                return false;
            });
        }

        for (let i = 0; i < clustersToUse.length; i++) {
            const clusterValue = clustersToUse[i];
            let count = 0;

            for (let j = 0; j < entitiesArray.length; j++) {
                const entity = entitiesArray[j];

                if (
                    (!isHighlightActive || highlightedSet.has(entity.moveBy)) &&
                    entity.categories.includes(clusterValue)
                ) {
                    count++;
                }
            }

            result.push([clusterValue, count]);
        }

        return result;
    })();

    $: clusterCounts = clusterValuesList.map(([_, count]) => count);

    $: minClusterCount =
        clusterCounts.length > 0 ? Math.min(...clusterCounts) : 0;
    $: maxClusterCount =
        clusterCounts.length > 0 ? Math.max(...clusterCounts) : 1;

    function getClusterFontSize(count) {
        if (minClusterCount === maxClusterCount) {
            return minClusterFontSize;
        }
        return (
            minClusterFontSize +
            ((count - minClusterCount) *
                (maxClusterFontSize - minClusterFontSize)) /
                (maxClusterCount - minClusterCount)
        );
    }

    function getTotalParticipants(entities) {
        return Object.values(entities).reduce(
            (sum, entity) => sum + entity.dataPoints.length,
            0,
        );
    }

    function pluralize(count, singular) {
        const irregularPlurals = {
            city: "cities",
            sport: "sports",
            height: "heights",
            noc: "NOCs",
            team: "teams",
            weight: "weights",
            year: "years",
            age: "ages",
            event: "events",
            medal: "medals",
            name: "names",
        };

        if (count === 1) {
            return singular;
        }

        return irregularPlurals[singular] || `${singular}s`;
    }

    function getClusterInfo(config) {
        return config.clusterBy ? config.clusterBy : "all clusters";
    }

    function getParticipantsGrouping(config) {
        return config.moveBy ? config.moveBy : "participants";
    }

    $: methodologyText = (() => {
        const selectedCluster = getClusterInfo($config);
        const participantsGrouping = getParticipantsGrouping($config);
        const totalParticipants = getTotalParticipants(filteredEntities);

        let text = `This visualization represents ${totalParticipants} ${pluralize(participantsGrouping, "participant")}, as individual ${pluralize(participantsGrouping, participantsGrouping)}, who have changed  ${selectedCluster}.`;

        if ($config.selectedClusterValue) {
            text += ` The data is filtered by ${selectedCluster} = ${$config.selectedClusterValue}, showing`;
        }

        if ($highlightedEntities.length > 0) {
            const highlightedCount = $highlightedEntities.length;
            text += ` ${highlightedCount} ${pluralize(highlightedCount, "result")} matching the query.`;
        }

        return text;
    })();
</script>

<header>
    <div class="header-info">
        <div class="methodology">
            {methodologyText}
        </div>
        <div class="header-buttons">
            <button class="reset" on:click={resetQueries}>Reset</button>
            <button class="copy-config" on:click={copyConfig}
                >Copy Config</button
            >
        </div>
    </div>
    <div class="categories">
        <div class="category">
            <label>Cluster By:</label>
            <div class="options">
                {#each reducedClusterOptions as option}
                    <span
                        class:selected={option === $config.clusterBy}
                        on:click={() => selectOption("clusterBy", option)}
                    >
                        {option}
                    </span>
                {/each}
            </div>
        </div>

        <div class="filtered-cluster-values">
            <label>Filter {$config.clusterBy}:</label>
            <div class="options tiny">
                {#each clusterValuesList as [value, count]}
                    <span
                        style="font-size: {getClusterFontSize(count)}px;"
                        class:highlighted={value ==
                            $config.selectedClusterValue}
                        on:click={() => selectClusterValue(value)}
                    >
                        {value}
                    </span>
                {/each}
            </div>
        </div>

        <div class="category">
            <label>Move By:</label>
            <div class="options">
                {#each reducedMoveOptions as option}
                    <span
                        class:selected={option === $config.moveBy}
                        on:click={() => selectOption("moveBy", option)}
                    >
                        {option}
                    </span>
                {/each}
            </div>
        </div>

        <div class="filtered-entities">
            <label>Filter {$config.moveBy}:</label>
            <input
                type="text"
                placeholder="Enter your query"
                value={queryValue}
                on:input={onQueryInput}
            />
            <div class="options tiny">
                {#each entitiesList
                    .slice(0, 50)
                    .sort( ([aName], [bName]) => aName.localeCompare(bName), ) as [entity, value]}
                    <span
                        style="font-size: {getFontSize(value)}px;"
                        class:highlighted={$highlightedEntities.includes(
                            entity,
                        )}
                        on:click={() => highlightedEntities.set([entity])}
                    >
                        {entity}
                    </span>
                {/each}
                {#if entitiesList.length > 50}
                    <p style="border-top: 1px solid;padding-top:10px">
                        50 out of {entitiesList.length}
                    </p>
                {/if}
            </div>
        </div>
    </div>
</header>

<style>
    .header-info {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid;
    }

    .header-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-bottom: 10px;
    }

    header {
        background: black;
        color: var(--main-color);
        padding: 10px;
        font-size: 20px;
        overflow: scroll;
    }

    label {
        /* position: sticky;
        top: 0; */
        opacity: 0.6;
        border-bottom: 1px solid;
        padding-bottom: 10px;
        background-color: black;
    }

    header > .categories {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .categories > div {
        flex: 1;
        flex: 0 0 20%;
        /* max-height: 40vh; */
        margin-bottom: 5px;
    }

    .category:not(:first-of-type) {
        border-left: 1px solid;
        margin-left: 20px;
        padding-left: 20px;
    }

    .category,
    .filtered-entities,
    .filtered-cluster-values {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .filtered-entities input[type="text"] {
        font-size: 20px;
        color: var(--main-color);
        background: transparent;
        border: none;
        border-bottom: 2px solid var(--main-color);
        padding: 8px 0;
        outline: none;
        margin-bottom: 10px;
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .options span {
        font-size: 40px;
        color: var(--main-color);
        cursor: pointer;
        transition: all 1s;
    }

    .tiny span {
        font-size: 20px;
    }

    .tiny span.highlighted {
        color: white;
        font-weight: bold;
    }

    .options span.selected {
        font-weight: bold;
        color: white;
    }

    .options span:hover {
        color: lightgray;
    }

    .reset,
    .copy-config {
        background-color: var(--main-color);
        color: black;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 16px;
    }

    .reset:hover,
    .copy-config:hover {
        background-color: lightgray;
    }
    .methodology {
        color: var(--main-color);
        /* text-align: right; */
        opacity: 0.6;
        font-size: 0.8rem;
        padding: 10px;
        max-width: 500px;
    }
</style>
