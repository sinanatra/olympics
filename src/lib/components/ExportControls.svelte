<script>
    import { get } from "svelte/store";
    import {
        config,
        canvasStore,
        filters,
        syncRecording,
        highlightedEntities,
    } from "$lib/stores.js";
    import { colorMap } from "$lib/constants.js";
    import { markEntityLoopComplete } from "$lib/loopStatus";

    let recorder;
    let isRecording = false;
    let isAutoRecording = false;
    let isAdvancedAutoRecording = false;
    let currentStep = 0;
    let interval;

    const recordDuration = 2000;
    const advancedRecordDuration = 4000;

    $: {
        if ($syncRecording == true) {
            startRecording();
        } else {
            stopRecording();
        }
    }

    async function startRecording() {
        const canvas = get(canvasStore);
        if (canvas) {
            const { default: RecordRTC } = await import("recordrtc");

            const stream = canvas.captureStream(30);

            recorder = new RecordRTC(stream, {
                type: "video",
                mimeType: "video/webm",
                videoBitsPerSecond: 15000000,
            });

            recorder.startRecording();
            isRecording = true;
            console.log("Recording started");
        } else {
            console.error("Canvas not found");
        }
    }

    async function stopRecording() {
        if (recorder && isRecording) {
            recorder.stopRecording(() => {
                const blob = recorder.getBlob();

                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "canvas_recording.webm";
                link.click();

                console.log("Recording stopped and saved");
            });

            isRecording = false;
        } else {
            console.error("No active recording");
        }
    }

    function startAutoRecording() {
        if (isAutoRecording) return;

        isAutoRecording = true;
        const keys = Object.keys(colorMap).filter(
            (option) => option !== "name",
        );

        console.log("Auto-recording started");

        if (!isRecording) {
            startRecording();
        }

        const interval = setInterval(() => {
            if (currentStep >= keys.length) {
                console.log("All steps completed. Stopping auto-recording.");
                stopAutoRecording();
                return;
            }

            const clusterByKey = keys[currentStep];
            config.update((c) => ({ ...c, clusterBy: clusterByKey }));
            console.log(`Updated clusterBy to: ${clusterByKey}`);

            currentStep++;
        }, recordDuration);
    }

    async function stopAutoRecording() {
        if (isAutoRecording) {
            clearInterval(interval);
            isAutoRecording = false;
            currentStep = 0;

            await stopRecording();
            console.log("Auto-recording stopped");
        }
    }

    async function startAdvancedAutoRecording() {
        if (isAdvancedAutoRecording) return;

        isAdvancedAutoRecording = true;

        const keys = Object.keys(colorMap).filter(
            (option) => option !== "name",
        );

        let filterValues;

        console.log("Advanced auto-recording started");

        if (!isRecording) {
            await startRecording();
        }

        async function processFiltersForKey(clusterByKey) {
            filterValues = get(filters);
            // console.log(clusterByKey, filterValues);

            for (const specificValue of filterValues) {
                config.update((c) => ({
                    ...c,
                    queryValue: "",
                    filters: {},
                }));

                highlightedEntities.set([]);

                config.update((c) => ({
                    ...c,
                    clusterBy: clusterByKey,
                    filters: {
                        [clusterByKey]: [specificValue[0]],
                    },
                    speed: 5,
                }));

                await new Promise((resolve) => {
                    // console.log($markEntityLoopComplete);
                    // if ($markEntityLoopComplete == true) {
                    //     $markEntityLoopComplete = false;
                    //     resolve();
                    // }
                    const unsubscribe = markEntityLoopComplete.subscribe(
                        (completed) => {
                            if (completed) {
                                markEntityLoopComplete.set(false);
                                // unsubscribe();
                                resolve();
                            }
                        },
                    );
                });
            }
        }

        for (const clusterByKey of keys) {
            config.update((c) => ({
                ...c,
                clusterBy: clusterByKey,
                filters: {},
            }));

            await new Promise((resolve) => setTimeout(resolve, 2000));

            await processFiltersForKey(clusterByKey);

            currentStep++;

            if (currentStep >= keys.length) {
                console.log("All categories and filters completed.");
                break;
            }
        }

        await stopAdvancedAutoRecording();
    }

    async function stopAdvancedAutoRecording() {
        if (isAdvancedAutoRecording) {
            isAdvancedAutoRecording = false;
            currentStep = 0;

            await stopRecording();
            console.log("Advanced auto-recording stopped");
        }
    }
</script>

<div>
    <button
        on:click={startRecording}
        disabled={isRecording || isAutoRecording || isAdvancedAutoRecording}
    >
        Start Manual Recording
    </button>
    <button
        on:click={stopRecording}
        disabled={!isRecording || isAutoRecording || isAdvancedAutoRecording}
    >
        Stop Manual Recording
    </button>
    <button
        on:click={startAutoRecording}
        disabled={isAutoRecording || isAdvancedAutoRecording}
    >
        Start Auto-Recording
    </button>
    <!-- <button on:click={stopAutoRecording} disabled={!isAutoRecording}>
        Stop Auto-Recording
    </button> -->
    <button
        on:click={startAdvancedAutoRecording}
        disabled={isAdvancedAutoRecording || isAutoRecording}
    >
        Start Advanced Auto-Recording
    </button>
    <!-- <button
        on:click={stopAdvancedAutoRecording}
        disabled={!isAdvancedAutoRecording}
    >
        Stop Advanced Auto-Recording
    </button> -->
</div>
