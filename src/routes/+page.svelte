<script>
    import { base } from "$app/paths";
</script>

<main data-sveltekit-reload>
    <div class="intro">
        <p>
            DATA STORYTELLING - 100 YEARS OF OLYMPIC HISTORY is an installation
            visualizing all 22,560 athletes who have ever participated in the
            Olympic Winter Games since their foundation in 1924.
        </p>
        <p>
            It is currently on display at Le Gallerie di Piedicastello in Trento
            as part of PERFORMANCE: a preparatory exhibition for the Milan
            Cortina 2026 edition of the Winter Games.
        </p>
        <p>
            Here you can <a href="{base}/search">explore</a> both curated
            <a href="{base}/stories">tales and stories</a>
            that may be of personal interest.
        </p>
    </div>
</main>

<style>
    main {
        margin: 0 auto;
        color: white;
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
