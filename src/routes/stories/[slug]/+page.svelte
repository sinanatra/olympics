<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import {
        data as storeData,
        width,
        height,
        config,
        highlightedEntities,
    } from "$lib/stores.js";
    import Sketch from "$lib/components/Sketch.svelte";
    import { tsv } from "d3-fetch";
    import { page } from "$app/stores";

    export let data;
    let loadedData = data;

    let datum = loadedData.posts.find((d) =>
        d.path.includes($page.params.slug),
    );

    let athletes = [];

    onMount(async () => {
        width.set(window.innerWidth);
        height.set(600);

        const loadedTSVData = await tsv(
            base + "/data/update-until-2022/data.tsv",
        );

        const processedData = loadedTSVData.map((row) => {
            const processedRow = {};
            for (const [key, value] of Object.entries(row)) {
                processedRow[key] = value?.trim() ? value : "NA";
            }
            return processedRow;
        });

        storeData.set(processedData);

        const response = await fetch(base + "/data/athletes.json");
        athletes = await response.json();
    });

    if (datum) {
        config.update((c) => ({
            ...c,
            ...datum.meta.config,
        }));

        highlightedEntities.set(datum.meta.config.highlightedEntities || []);
    }
</script>

<main>
    {#if datum != undefined && $storeData.length > 0 && athletes.length > 0}
        <div class="sketch">
            <Sketch />
        </div>

        {#if datum.meta.methodology}
            <div class="methodology">
                {@html datum.meta.methodology}
            </div>
        {/if}
        <div class="info">
            <div class="title">
                <h1>{@html datum?.meta.title}</h1>
            </div>
            <div class="content">
                {#if datum.text}
                    <div class="description">
                        {@html datum.text}
                    </div>
                {/if}
                {#if datum?.meta.media}
                    {#if datum.meta.config.highlightedEntities}
                        <div class="medias">
                            {#each datum?.meta.config.highlightedEntities as high}
                                <!-- {high} -->

                                {#if athletes}
                                    {#each athletes.filter((d) => d.name.toLowerCase() == high) as athlete}
                                        {#if athlete.image}
                                            <a
                                                href={athlete.url}
                                                target="_blank"
                                            >
                                                <div class="athlete">
                                                    <img
                                                        src={athlete.image}
                                                        alt={athlete.name}
                                                    />
                                                    <p>
                                                        {athlete.name}
                                                    </p>
                                                </div>
                                            </a>
                                        {:else}
                                            <!-- <p>no img</p> -->
                                        {/if}
                                    {/each}
                                {/if}
                            {/each}
                        </div>
                    {/if}
                {/if}
            </div>
        </div>
    {:else}
        <p class="loading">Loading...</p>
    {/if}
</main>

<style>
    .sketch {
        min-height: 600px;
        position: sticky;
        top: 0;
        z-index: -1;
    }

    .loading {
        padding: 10px;
    }

    .info {
        background: black;
        padding: 20px;
        color: var(--main-color);
        border-top: 1px solid var(--main-color);
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 18px;
    }

    /* .content {
        column-count: 2;
        column-gap: 40px;
        column-width: 800px;
    } */

    .description {
        break-inside: avoid;
        margin-bottom: 20px;
    }

    :global(.description hr ~ p) {
        color: var(--second-color);
    }

    :global(hr) {
        visibility: hidden;
        break-after: column;
        border: none;
        border-top: 2px solid var(--main-color);
        margin: 20px 0;
    }

    .description {
        color: var(--main-color);
        padding-right: 15px;
        column-count: 2;
        column-gap: 20px;
    }

    :global(.description img) {
        max-width: 260px;
        object-fit: contain;
    }

    .methodology {
        color: var(--main-color);
        text-align: right;
        opacity: 0.6;
        font-size: 0.6rem;
        padding: 10px;
    }

    :global(.content p) {
        margin: 0;
        margin-bottom: 1em;
    }

    .medias {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        min-width: 250px;
    }

    a {
        color: var(--main-color);
        text-decoration: unset;
    }

    .athlete p {
        max-width: 135px;
        font-size: 0.9em;
        opacity: 0.6;
        word-break: break-word;
    }

    .athlete img {
        max-width: 140px;
        max-height: 140px;
        object-fit: cover;
        width: 100%;
        filter: grayscale(100%);
    }
</style>
