<script>
    export let data;
</script>

<main>
    {#each data.posts as d}
        <a href={d.path.replace("/texts/", "")}  data-sveltekit-reload>
            <div>
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
        max-width: 350px;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover div {
        color: white;
        background-color: black;
        box-shadow: inset 0px 0px 2px 2px white;
    }
</style>
