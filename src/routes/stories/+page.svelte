<script>
    import { base } from "$app/paths";
    import { onMount, onDestroy } from "svelte";
    import { data, width, height, config } from "$lib/stores.js";
    import Sketch from "$lib/components/Sketch.svelte";
    import TestPanel from "$lib/components/TestPanel.svelte";
    import InfoPanel from "$lib/components/InfoPanel.svelte";
    import { tsv } from "d3-fetch";
    import { highlightedEntities } from "$lib/stores.js";
    import { loopStatusStore, resetLoopStatus } from "$lib/loopStatus";
    import stories from "$lib/stories.json";

    let currentStoryIndex = -1;
    let currentStory = stories[currentStoryIndex];

    function advanceStory() {
        currentStoryIndex = (currentStoryIndex + 1) % stories.length;
        currentStory = stories[currentStoryIndex];

        $highlightedEntities = currentStory.highlightedEntities || [];
        $config = currentStory.config;
    }

    loopStatusStore.subscribe(({ entityCompletedLoop }) => {
        if (entityCompletedLoop) {
            advanceStory();
            resetLoopStatus();
        }
    });

    onMount(async () => {
        const loadedData = await tsv(
            base + "/data/update-until-2022/until2022-all-winter-olympia.tsv",
        );
        data.set(loadedData);

        width.set(window.innerWidth);
        height.set(window.innerHeight - 200);
        advanceStory();
    });
</script>

<main>
    {#if $data.length > 0}
        <div>
            <Sketch />
            <InfoPanel {currentStory} />
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
    <div>
        <TestPanel />
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
