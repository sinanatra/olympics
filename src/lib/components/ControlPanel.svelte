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

    // $: highlightedData =
    //     $highlightedEntities.length > 0
    //         ? $highlightedEntities.map((entityName) => $entities[entityName])
    //         : [];
</script>

<header>
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
            {#each uniqueClusterValues as value}
                <span
                    class:highlighted={value === $config.selectedClusterValue}
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
            len: {Object.keys(filteredEntities).length}
            {#each Object.keys(filteredEntities).slice(0, 50).sort() as entity}
                <span
                    class:highlighted={$highlightedEntities.includes(entity)}
                    on:click={() => highlightedEntities.set([entity])}
                >
                    {entity}
                </span>
            {/each}
        </div>
    </div>
</header>

<style>
    header {
        background: black;
        color: var(--main-color);
        padding: 10px;
        display: flex;
        font-size: 20px;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
    }

    header > div {
        flex: 1;
        flex: 0 0 25%;
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
</style>
