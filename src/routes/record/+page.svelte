<script>
    import { base } from "$app/paths";

    import { onMount } from "svelte";
    import {
        data as mainData,
        width,
        height,
        config,
        highlightedEntities,
    } from "$lib/stores.js";
    import Sketch from "$lib/components/Sketch.svelte";
    import ControlPanel from "$lib/components/ControlPanel.svelte";
    import ExportControls from "$lib/components/ExportControls.svelte";
    export let data;

    let storyid = -1;
    import { tsv } from "d3-fetch";

    // $config.clusterBy = "age";
    // $config.moveBy = "name";
    // $config.speed = 5;
    // $config.stroke = 5;
    // $stroke = 1;
    // $config.queryValue = ""

    onMount(async () => {
        const loadedData = await tsv(base + "/data/update-until-2022/data.tsv");

        const processedData = loadedData.map((row) => {
            const processedRow = {};
            for (const [key, value] of Object.entries(row)) {
                processedRow[key] = value?.trim() ? value : "NA";
            }
            return processedRow;
        });

        mainData.set(processedData);

        width.set(3240);
        height.set(1080);
    });
</script>

{#if $mainData.length > 0}
    <main>
        <div>
            <Sketch />
        </div>
        <div>
            <button
                on:click={() => {
                    storyid = (storyid + 1) % data.posts.length;
                    // caption.set(data.posts[storyid]?.meta?.caption || "");

                    config.update((c) => ({
                        ...c,
                        ...data.posts[storyid]?.meta?.config,
                        caption: data.posts[storyid]?.meta?.caption,
                    }));

                    highlightedEntities.set(
                        data.posts[storyid]?.meta?.config
                            ?.highlightedEntities || [],
                    );
                }}
            >
                Select Story: {data.posts[storyid]?.meta?.title || "No Title"}
            </button>
        </div>
        <div>
            <ExportControls />
        </div>
        <div>
            <ControlPanel />
        </div>
    </main>
{:else}
    <p>...</p>
{/if}

<style>
    div {
        position: sticky;
        top: 0;
    }
    p {
        height: 100vh;
        margin: 0;
        padding: 10px;
    }
</style>
