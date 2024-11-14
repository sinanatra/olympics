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

        storeData.set(loadedTSVData);

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

        <div class="info">
            <div class="title">
                <h1>{@html datum?.meta.title}</h1>
            </div>
            <div class="content">
                <div class="description">
                    {@html datum?.text}
                </div>
                <div class="methodology">
                    {@html datum?.meta.methodology}
                </div>
                <div class="medias">
                    {#each datum?.meta.config.highlightedEntities as high}
                        <!-- {high} -->

                        {#if athletes}
                            {#each athletes.filter((d) => d.name.toLowerCase() == high) as athlete}
                                {#if athlete.image}
                                    <div class="athlete">
                                        <!-- {athlete.name} -->
                                        <img
                                            src={athlete.image}
                                            alt={athlete.name}
                                        />
                                    </div>
                                {:else}
                                    <!-- <p>no img</p> -->
                                {/if}
                            {/each}
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
</main>

<style>
    .sketch {
        min-height: 600px;
    }

    .info {
        background: black;
        padding: 20px;
        color: var(--main-color);
        border-top: 1px solid var(--main-color);
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 12px;
    }

    .content {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 20px;
    }

    .description {
        color: var(--main-color);
        padding-right: 15px;
        column-count: 2;
        column-gap: 20px;
    }

    .methodology {
        color: var(--main-color);
    }

    :global(.content p) {
        margin: 0;
        margin-bottom: 1em;
    }

    .medias {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .athlete img {
        max-width: 50px;
        max-height: 50px;
        object-fit: cover;
        width: 100%;
        filter: grayscale(100%);
    }
</style>
