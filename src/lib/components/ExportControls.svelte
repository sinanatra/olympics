<script>
    import { get } from "svelte/store";
    import { config, canvasStore } from "$lib/stores.js";
    import { colorMap } from "$lib/constants.js";

    let recorder;
    let isRecording = false;
    let isAutoRecording = false;
    let currentStep = 0;
    let interval;

    const recordDuration = 60000;

    async function startRecording() {
        const canvas = get(canvasStore);
        if (canvas) {
            const { default: RecordRTC } = await import("recordrtc");

            const stream = canvas.captureStream(30);

            recorder = new RecordRTC(stream, {
                type: "video",
                mimeType: "video/webm",
                videoBitsPerSecond: 5000000,
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

        interval = setInterval(async () => {
            if (currentStep >= keys.length) {
                console.log("All steps completed. Stopping auto-recording.");
                stopAutoRecording();
                return;
            }

            const clusterByKey = keys[currentStep];
            config.update((c) => ({ ...c, clusterBy: clusterByKey }));
            console.log(`Updated clusterBy to: ${clusterByKey}`);

            if (!isRecording) {
                await startRecording();
            }
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
</script>

<div>
    <button on:click={startRecording} disabled={isRecording || isAutoRecording}>
        Start Manual Recording
    </button>
    <button on:click={stopRecording} disabled={!isRecording || isAutoRecording}>
        Stop Manual Recording
    </button>
    <button on:click={startAutoRecording} disabled={isAutoRecording}>
        Start Auto-Recording
    </button>
    <button on:click={stopAutoRecording} disabled={!isAutoRecording}>
        Stop Auto-Recording
    </button>
</div>
