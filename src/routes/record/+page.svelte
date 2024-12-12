<script>
    import { base } from "$app/paths";

    import { onMount } from "svelte";
    import { data, width, height, config, stroke } from "$lib/stores.js";
    import Sketch from "$lib/components/Sketch.svelte";
    import ControlPanel from "$lib/components/ControlPanel.svelte";
    import ExportControls from "$lib/components/ExportControls.svelte";

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

        data.set(processedData);

        width.set(3840);
        height.set(2160);
    });
</script>

{#if $data.length > 0}
    <main>
        <div>
            <Sketch />
        </div>
        <div><ExportControls /></div>
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
