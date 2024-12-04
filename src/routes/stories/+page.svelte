<script>
    export let data;
    import { config } from "$lib/stores.js";
    import { colorMap } from "$lib/constants.js";
</script>

<main>
    {#each data.posts as d}
        <a href={d.path.replace("/texts/", "")} data-sveltekit-reload>
            <div
                style="background-color: hsl(
                    {colorMap[d.meta.config.clusterBy]?.start[0]},
                    {colorMap[d.meta.config.clusterBy]?.start[1]}%,
                    {colorMap[d.meta.config.clusterBy]?.start[2]}% );"
            >
                <h1>
                    {@html d.meta.title}
                </h1>
                <p>{@html d.meta.description}</p>
            </div>
        </a>
    {/each}
</main>

<style>
    main {
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    div {
        padding: 10px;
        background-color: white;
        border-radius: 10px;
        min-height: 250px;
        max-width: 20vw;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover div {
        box-shadow: inset 0px 0px 2px 2px black;
    }
</style>
