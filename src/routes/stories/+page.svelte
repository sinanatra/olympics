<script>
    export let data;
    import { config } from "$lib/stores.js";
    import { colorMap } from "$lib/constants.js";
    console.log(data)
</script>

<main>
    {#each data.posts as d}
        <a href={d.path.replace("/texts/", "")} data-sveltekit-reload  style="--hover-color: hsl(
            {colorMap[d.meta.config.clusterBy]?.start[0]},
            {colorMap[d.meta.config.clusterBy]?.start[1]}%,
            {colorMap[d.meta.config.clusterBy]?.start[2]}% );">
            <div class="grid-container">
                <h1>{@html d.meta.title}</h1>
                <!-- <p>{@html d.meta.caption}</p> -->
            </div>
        </a>
    {/each}
</main>

<style>
    main {
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    a {
        display: block;
        color: black;
        text-decoration: none;
        width: 100%;
    }

    a:hover .grid-container {
        box-shadow: inset 0px 0px 2px 2px black;
    }

    .grid-container {
        color: white;
        text-align: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
        font-size: clamp(24px, 10vw, 64px);
    }

    .grid-container > * {
        max-width: 1250px;
        margin: 0 auto;
    }

    h1 {
        margin: 0;
        font-size: clamp(24px, 10vw, 64px);
    }

    h1:hover {
        text-decoration: underline;
        color: var(--hover-color);
        transition: all .5s;
    }

    p {
        margin: 0;
    }
</style>
