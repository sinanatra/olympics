<script>
    import { base } from "$app/paths";

    import { onMount } from "svelte";
    import {
        data as mainData,
        width,
        height,
        config,
        highlightedEntities,
        syncRecording
    } from "$lib/stores.js";
    import Sketch from "$lib/components/Sketch.svelte";
    import ControlPanel from "$lib/components/ControlPanel.svelte";
    import ExportControls from "$lib/components/ExportControls.svelte";
    export let data;

    let storyid = -1;
    let interval = null;
    let isRecording = false;
    import { tsv } from "d3-fetch";

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

    function startRecording() {
        if (!isRecording) {
            isRecording = true;
            $syncRecording = true
            console.log("Manual recording started");
        }
    }

    function stopRecording() {
        if (isRecording) {
            isRecording = false;
            $syncRecording = false
            console.log("Manual recording stopped");
        }
    }

    function startCounter() {
        if (interval) return;

        startRecording();

        interval = setInterval(() => {
            storyid = (storyid + 1) % data.posts.length;

            config.update((c) => ({
                ...c,
                ...data.posts[storyid]?.meta?.config,
                caption: data.posts[storyid]?.meta?.caption,
            }));

            highlightedEntities.set(
                data.posts[storyid]?.meta?.config?.highlightedEntities || [],
            );

            console.log(`Current story: ${data.posts[storyid]?.meta?.title}`);

            if (storyid === data.posts.length - 1) {
                stopCounter();
                stopRecording();
            }
        }, 60000);
    }

    function stopCounter() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }
</script>

{#if $mainData.length > 0}
    <main>
        <div>
            <Sketch />
        </div>
        <div>
            <button
                on:click={() => {
                    startCounter();
                }}
                disabled={isRecording}
            >
                Start Recording Stories
            </button>
            <button
                on:click={() => {
                    stopCounter();
                    stopRecording();
                }}
                disabled={!isRecording}
            >
                Stop Recording Stories
            </button>
            <span>
                Current Story: {data.posts[storyid]?.meta?.title || "No Title"}
                <spanp> </spanp></span
            >
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
