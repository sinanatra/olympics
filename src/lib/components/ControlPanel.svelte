<script>
    import {
        config,
        highlightedEntities,
        entities,
        clusters,
    } from "$lib/stores.js";
    import { clusterOptions, filteredOptions } from "$lib/constants.js";
    import { get } from "svelte/store";

    const excludedClusterOptions = ["height", "noc", "weight", "medal"];
    const excludedMoveOptions = ["height", "noc", "weight", "medal"];

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

            const query = $config.queryValue.toLowerCase();
            const category = $config.queryCategory;
            const matchesQuery =
                $config.queryValue.length >= 3
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

        const query = $config.queryValue.toLowerCase();
        const category = $config.queryCategory;
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
        highlightedEntities.set([]);
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

    $: clusterValuesList = uniqueClusterValues.map((clusterValue) => {
        const count = Object.values($entities).filter((entity) =>
            entity.categories.includes(clusterValue),
        ).length;

        return [clusterValue, count];
    });

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
</script>

<header>
    <button class="reset" on:click={resetQueries}>Reset</button>
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

        <div class="filtered-cluster-values">
            <label>Values for {$config.clusterBy}:</label>
            <div class="options tiny">
                {#each clusterValuesList as [value, count]}
                    <span
                        style="font-size: {getClusterFontSize(count)}px;"
                        class:highlighted={value ===
                            $config.selectedClusterValue}
                        on:click={() => selectClusterValue(value)}
                    >
                        {value}
                    </span>
                {/each}
            </div>
        </div>

        <div class="filtered-entities">
            <label>Filter By:</label>
            <input
                type="text"
                placeholder="Enter your query"
                bind:value={$config.queryValue}
            />
            <div class="options tiny">
                <!-- len: {entitiesList.length} -->
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
    .reset {
        float: right;
        margin: 10px;
    }

    header {
        background: black;
        color: var(--main-color);
        padding: 10px;
        font-size: 20px;
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
        margin-bottom: 5px;
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

    button {
        background-color: var(--main-color);
        color: black;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 10px;
    }

    button:hover {
        background-color: lightgray;
    }
</style>
