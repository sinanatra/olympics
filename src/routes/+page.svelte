<script>
    import { base } from "$app/paths";
</script>

<main data-sveltekit-reload>
    <div class="intro">
        <p>
            A data storytelling installation visualizing all 22,560 athletes who
            have ever participated in the Olympic Winter Games from its
            inception in 1924 to 2022.
        </p>
        <p>
            This work is presented as part of the "RECORDS" exhibition,
            currently on display at the Galleria in Trento.
        </p>
        <p>
            Explore curated <a href="{base}/stories">stories</a> or
            <a href="{base}/search">search</a>
            for your own personal connections.
        </p>
    </div>
</main>

<style>
    main {
        margin: 0 auto;
    }

    .intro {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
        font-size: clamp(24px, 10vw, 64px);
    }
    a {
        width: 100%;
        color: white;
        /* font-size: 20vw;
        text-align: center;
        display: block; */
    }

    a:hover {
        background-color: white;
        color: black;
    }
</style>
