<script>
    import {
        config,
        stroke,
        curves,
        speed,
        randomizeClusters,
        highlightedEntities,
        entities,
        data,
    } from "$lib/stores.js";
    import { clusterOptions, filteredOptions } from "$lib/constants.js";
    import { get } from "svelte/store";
    import { markEntityLoopComplete } from "$lib/loopStatus";

    $: if ($entities && $config.speed) {
        selectEntity();
    }

    function selectRandomCombination() {
        const newClusterBy =
            filteredOptions[Math.floor(Math.random() * filteredOptions.length)];
        const newMoveBy =
            clusterOptions[Math.floor(Math.random() * clusterOptions.length)];
        config.update((c) => ({
            ...c,
            clusterBy: newClusterBy,
            moveBy: newMoveBy,
        }));
    }

    function selectRandomEntity() {
        const entityKeys = Object.keys(get(entities));
        if (entityKeys.length > 0) {
            const randomEntity =
                entityKeys[Math.floor(Math.random() * entityKeys.length)];
            highlightedEntities.set([randomEntity]);
        }
    }

    function deleteHighlight() {
        highlightedEntities.set([]);
    }

    function selectEntity() {
        const query = get(config).queryValue.toLowerCase();
        const category = get(config).queryCategory;
        const tempHighlightedEntities = [];

        Object.entries(get(entities)).forEach(([entityName, entityData]) => {
            if (
                entityData.dataPoints.some((dp) =>
                    dp[category]?.toString().toLowerCase().includes(query),
                )
            ) {
                tempHighlightedEntities.push(entityName);
                entityData.currentCategoryIndex = 0;
                entityData.t = 0;
                entityData.trail = [];
            }
        });

        highlightedEntities.set(tempHighlightedEntities);
    }
</script>

<header>
    <div>
        <label for="clusterBy">Cluster By:</label>
        <select id="clusterBy" bind:value={$config.clusterBy}>
            {#each filteredOptions as option}
                <option value={option}>{option}</option>
            {/each}
        </select>
    </div>
    <div>
        <label for="moveBy">Move By:</label>
        <select id="moveBy" bind:value={$config.moveBy}>
            {#each clusterOptions as option}
                <option value={option}>{option}</option>
            {/each}
        </select>
    </div>

    <div>
        <div>
            <label>
                <input
                    type="radio"
                    name="curves"
                    bind:group={$curves}
                    value={false}
                />
                Lines
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    name="curves"
                    bind:group={$curves}
                    value={true}
                />
                Curves
            </label>
        </div>
    </div>

    <div>
        <label>Stroke:</label>
        <input type="range" min="1" max="20" step="1" bind:value={$stroke} />
    </div>
    <div>
        <label>Speed:</label>
        <input type="range" min="1" max="30" step="1" bind:value={$speed} />
    </div>

    <div>
        <div>
            <label>
                <input
                    type="radio"
                    name="positioning"
                    bind:group={$randomizeClusters}
                    value={false}
                />
                Circular
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    name="positioning"
                    bind:group={$randomizeClusters}
                    value={true}
                />
                Scattered
            </label>
        </div>
    </div>

    <div>
        <button on:click={selectRandomCombination}>Random Combination</button>
        <button on:click={selectRandomEntity}>Random Highlight</button>
        {#if $highlightedEntities.length > 0}
            <button on:click={deleteHighlight}>Delete Highlight</button>
        {:else}
            <button disabled>Delete Highlight</button>
        {/if}
    </div>

    <div>
        <label for="queryCategory">Filter By:</label>
        <select id="queryCategory" bind:value={$config.queryCategory}>
            {#each clusterOptions as option}
                <option value={option}>{option}</option>
            {/each}
        </select>
        <input
            type="text"
            placeholder="Enter your query"
            bind:value={$config.queryValue}
        />
        <button on:click={selectEntity}>Filter</button>
    </div>

    <div>
        <button on:click={markEntityLoopComplete}>Next Story</button>
    </div>
</header>

<style>
    header {
        background: rgb(246, 246, 246);
        color: black;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        margin-top: 100px;
    }
    header > div {
        flex: 0 0 150px;
        margin-bottom: 5px;
    }
</style>
