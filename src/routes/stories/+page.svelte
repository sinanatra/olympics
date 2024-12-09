<script>
    export let data;
    import { config } from "$lib/stores.js";
    import { colorMap } from "$lib/constants.js";
</script>

<main>
    {#each data.posts as d}
        <a href={d.path.replace("/texts/", "")} data-sveltekit-reload>
            <div class="grid-container">
                <h1>{@html d.meta.title}</h1>
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
        gap: 10px;
    }

    a {
        color: black;
        text-decoration: none;
        width: 100%;
    }

    a:hover .grid-container {
        box-shadow: inset 0px 0px 2px 2px black;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 20px;
        align-items: start;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        min-height: 100px;
    }

    .grid-container > * {
        max-width: 750px;
    }

    h1 {
        margin: 0;
    }

    p {
        margin: 0;
    }
</style>
