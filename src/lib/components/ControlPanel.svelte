<script>
    import {
        config,
        highlightedEntities,
        entities,
        clusters,
        filters,
        caption,
    } from "$lib/stores.js";
    import {
        clusterOptions,
        filteredOptions,
        colorMap,
    } from "$lib/constants.js";
    import { get } from "svelte/store";

    let queryValue = $config.queryValue || "";

    config.update((c) => ({ ...c, filters: c.filters || {} }));

    function onQueryInput(event) {
        queryValue = event.target.value;
        config.update((c) => ({ ...c, queryValue }));
    }

    $: reducedClusterOptions = filteredOptions;

    $: uniqueClusterValues = (() => {
        const clusterSet = new Set();
        Object.values($entities).forEach((entityData) => {
            entityData.dataPoints.forEach((dp) => {
                const clusterValue = dp[$config.clusterBy];
                if (clusterValue) {
                    clusterSet.add(clusterValue);
                }
            });
        });
        return Array.from(clusterSet);
    })();

    function entityMatchesFilters(entityData) {
        const filters = $config.filters || {};
        const dataPoints = entityData.dataPoints;

        for (const [filterField, selectedValues] of Object.entries(filters)) {
            if (!selectedValues || selectedValues.length === 0) continue;
            const matchesField = dataPoints.some((dp) => {
                const dpValue = dp[filterField]?.toString().toLowerCase();
                return selectedValues.some(
                    (value) => dpValue === value.toLowerCase(),
                );
            });
            if (!matchesField) {
                return false;
            }
        }

        const query = $config.queryValue?.toLowerCase() || "";
        if (query.length >= 0) {
            const queryCategory = $config.queryCategory || "name";
            const matchesQuery = dataPoints.some((dp) =>
                dp[queryCategory]?.toString().toLowerCase().includes(query),
            );
            if (!matchesQuery) {
                return false;
            }
        }

        if ($highlightedEntities.length > 0) {
            return $highlightedEntities.includes(entityData.moveBy);
        }

        return true;
    }

    $: filteredEntities = Object.entries($entities)
        .filter(([entityName, entityData]) => entityMatchesFilters(entityData))
        .reduce((acc, [key, entityData]) => {
            acc[key] = entityData;
            return acc;
        }, {});

    function selectOption(type, option) {
        if (type === "clusterBy") {
            config.update((c) => ({ ...c, clusterBy: option }));
        } else if (type === "moveBy") {
            config.update((c) => ({ ...c, moveBy: option }));
        }
    }

    $: activeFilters = [];
    $: {
        activeFilters = [];
        const filters = $config.filters || {};
        for (const [filterKey, filterValues] of Object.entries(filters)) {
            for (const value of filterValues) {
                activeFilters.push({ label: value, type: filterKey });
            }
        }

        /*if ($config.queryValue && $config.queryValue.length >= 3) {
            activeFilters.push({ label: $config.queryValue, type: "query" });
        }*/

        if ($highlightedEntities.length === 1) {
            activeFilters.push({
                label: $highlightedEntities[0],
                type: "name",
            });
        }
    }

    function removeFilter(filter) {
        config.update((c) => {
            const newFilters = { ...c.filters };
            if (filter.type === "query") {
                c.queryValue = "";
            } else if (filter.type === "name") {
                highlightedEntities.update((list) => {
                    return list.filter((entity) => entity !== filter.label);
                });
            } else {
                const filterValues = newFilters[filter.type];
                if (filterValues && filterValues.includes(filter.label)) {
                    newFilters[filter.type] = filterValues.filter(
                        (v) => v !== filter.label,
                    );
                    if (newFilters[filter.type].length === 0) {
                        delete newFilters[filter.type];
                    }
                }
            }
            return { ...c, filters: newFilters };
        });
    }

    function selectClusterValue(value) {
        const clusterBy = $config.clusterBy;
        config.update((c) => {
            const newFilters = { ...c.filters };
            const currentValue = newFilters[clusterBy]?.[0];

            if (currentValue === value) {
                delete newFilters[clusterBy];
            } else {
                newFilters[clusterBy] = [value];
            }

            return { ...c, filters: newFilters };
        });
    }

    function selectEntity(entityName) {
        highlightedEntities.update((list) => {
            if (!list.includes(entityName)) {
                list.push(entityName);
            }
            return list;
        });
    }

    function resetQueries() {
        config.update((c) => ({
            ...c,
            queryValue: "",
            filters: {},
        }));
        queryValue = "";
        highlightedEntities.set([]);
    }

    function copyConfig() {
        const currentConfig = {
            title: "Default Title",
            caption: "Add a caption here",
            media: false,
            config: {
                clusterBy: $config.clusterBy,
                moveBy: $config.moveBy,
                filters: $config.filters,
                queryValue: queryValue,
                queryCategory: $config.queryCategory || "name",
                speed: $config.speed || 6,
                stroke: $config.stroke || 10,
                loops: $config.loopsToComplete || 1,
                highlightedEntities: get(highlightedEntities),
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

    $: entitiesList = Object.entries(filteredEntities || {}).map(
        ([entityName, entityData]) => [
            entityName,
            entityData.dataPoints.length,
        ],
    );

    $: allParticipants = entitiesList.map(([name, value]) => name);
    $: allValues = entitiesList.map(([_, value]) => value);

    $: {
        if (Object.entries($entities).length != allParticipants.length) {
            $highlightedEntities = allParticipants;
        }
    }

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
        const clusterValueCounts = {};
        Object.values(filteredEntities).forEach((entityData) => {
            entityData.dataPoints.forEach((dp) => {
                const clusterValue = dp[$config.clusterBy];
                if (clusterValue) {
                    clusterValueCounts[clusterValue] =
                        (clusterValueCounts[clusterValue] || 0) + 1;
                }
            });
        });
        $filters = Object.entries(clusterValueCounts);
        return Object.entries(clusterValueCounts);
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
            is: "are",
        };

        if (count === 1) {
            return singular;
        }

        return irregularPlurals[singular] || `${singular}s`;
    }

    function getClusterInfo(config) {
        return config.clusterBy ? config.clusterBy : "all clusters";
    }

    $: methodologyText = (() => {
        const selectedCluster = getClusterInfo($config);

        const totalParticipants =
            $highlightedEntities.length > 0
                ? $highlightedEntities.length
                : allParticipants.length;

        let text = "";

        if (activeFilters.length > 0) {
            const nameFilter = activeFilters.find(
                (item) => item.type === "name",
            );

            if (nameFilter && activeFilters.length === 1) {
                text = `${nameFilter.label} is`;
                $caption = `${text} ${colorMap[get(config).clusterBy].text}`;
            } else {
                const details = activeFilters
                    .map((item) => {
                        if (item.type === "name") {
                            return item.label;
                        } else {
                            return `${item.type} → ${item.label}`;
                        }
                    })
                    .join(", ");

                text = `${totalParticipants} ${pluralize(totalParticipants, "participant")} {${details}} ${pluralize(totalParticipants, "is")}`;
                $caption = `${text} ${colorMap[get(config).clusterBy].text}`;
            }
        } else {
            text = `${totalParticipants} ${pluralize(totalParticipants, "participant")} ${pluralize(totalParticipants, "is")}`;
            $caption = `${text} ${colorMap[get(config).clusterBy].text}`;
        }

        return text;
    })();
</script>

<header>
    <div class="header-info">
        <div class="caption">
            <!-- {methodologyText} -->
        </div>
        <div class="header-buttons">
            <div class="active-filters" on:click={resetQueries}>
                {#each activeFilters as filter}
                    <span class="filter">
                        <!-- <span class="filter" on:click={() => removeFilter(filter)}> -->
                        {filter.label}
                    </span>
                    <!-- <button>x</button> -->
                {/each}
                <button class="reset" on:click={resetQueries}>Reset</button>
            </div>
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
                {#each clusterValuesList.sort() as [value, count]}
                    <span
                        style="font-size: {getClusterFontSize(count)}px;"
                        class:selected={$config.filters[
                            $config.clusterBy
                        ]?.[0] === value}
                        on:click={() => {
                            $highlightedEntities = [];
                            selectClusterValue(value);
                        }}
                    >
                        {value}
                    </span>
                {/each}
            </div>
        </div>
        <!-- 
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
        </div> -->

        <div class="filtered-entities">
            <!-- <label>Filter {$config.moveBy}:</label> -->
            <input
                type="text"
                placeholder="Filter {$config.moveBy}..."
                value={queryValue}
                on:input={onQueryInput}
            />
            <div class="options tiny">
                {#each entitiesList
                    .slice(0, 100)
                    .sort( ([aName], [bName]) => aName.localeCompare(bName), ) as [entity, value]}
                    <span
                        style="font-size: {getFontSize(value)}px;"
                        class:highlighted={$highlightedEntities.includes(
                            entity,
                        )}
                        on:click={() => {
                            $highlightedEntities = [];
                            highlightedEntities.update((list) => {
                                if (!list.includes(entity)) {
                                    list.push(entity);
                                }
                                return list;
                            });
                        }}
                    >
                        {entity}
                    </span>
                {/each}
                {#if entitiesList.length > 100}
                    <p style="border-top: 1px solid;padding-top:10px">
                        100 out of {entitiesList.length}
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
        overflow: hidden;
    }

    label {
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

    input[type="text"]::placeholder {
        color: var(--main-color);
        opacity: 0.6;
    }

    .filtered-entities input[type="text"] {
        font-size: 20px;
        color: var(--main-color);
        background: transparent;
        border: none;
        opacity: 0.6;
        border: 1px solid;
        padding: 6px;
        background-color: black;
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-transform: capitalize;
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

    .methodology {
        color: var(--main-color);
        opacity: 0.6;
        font-size: 0.8rem;
        padding: 10px;
        max-width: 500px;
    }

    .active-filters {
        display: flex;
        flex-wrap: wrap;
        gap: 0px;
    }

    .active-filters > span:last-of-type {
        border-right: 1px solid black;
    }

    .reset:hover,
    .active-filters:hover *,
    .copy-config:hover {
        background-color: lightgray;
    }

    .filter {
        background-color: var(--main-color);
        color: black;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 16px;
    }

    /* .filter:hover {
        background-color: white;
    } */

    .filter button {
        background: none;
        border: none;
        color: black;
        font-weight: bold;
        cursor: pointer;
    }

    .reset {
        background-color: var(--main-color);
        color: black;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
    }

    .reset:hover {
        background-color: lightgray;
    }

    .copy-config {
        background-color: var(--main-color);
        color: black;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 16px;
    }

    .copy-config:hover {
        background-color: lightgray;
    }

    @media (max-width: 768px) {
        header {
            padding: 10px;
            font-size: 16px;
        }

        .header-info {
            flex-direction: column;
            gap: 15px;
        }

        .header-buttons {
            justify-content: center;
            gap: 10px;
        }

        header > .categories {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .categories > div {
            flex: 1 0 auto;
            margin-bottom: 10px;
        }

        .filtered-cluster-values label {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .options {
            display: block;
        }

        .filtered-cluster-values .options span {
            font-size: 18px;
            padding: 5px 10px;
            border-radius: 5px;
            white-space: nowrap;
            display: inline-flex;
        }

        input[type="text"] {
            font-size: 14px;
            width: 100%;
            margin-bottom: 10px;
        }

        .reset,
        .copy-config {
            font-size: 14px;
            padding: 8px 12px;
        }

        .filter {
            font-size: 14px;
            padding: 8px 10px;
        }

        .methodology {
            font-size: 14px;
            margin-bottom: 10px;
        }
    }
</style>
