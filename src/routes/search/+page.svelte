<script>
    import { base } from "$app/paths";

    import { onMount } from "svelte";
    import { data, width, height } from "$lib/stores.js";
    import Sketch from "$lib/components/Sketch.svelte";
    import ControlPanel from "$lib/components/ControlPanel.svelte";
    import InfoPanel from "$lib/components/InfoPanel.svelte";
    import { tsv } from "d3-fetch";

    onMount(async () => {
        const loadedData = await tsv(
            base + "/data/update-until-2022/until2022-all-winter-olympia.tsv",
        );
        data.set(loadedData);

        width.set(window.innerWidth);
        height.set(window.innerHeight - 200);
    });
</script>

<main>
    {#if $data.length > 0}
        <div>
            <Sketch />
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
    <div>
        <ControlPanel />
    </div>
</main>

<style>
    div {
        position: sticky;
        top: 0;
    }
    p {
        height: 100vh;
        padding: 10px;
    }
</style>
