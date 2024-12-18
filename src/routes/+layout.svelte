<script>
    import { config } from "$lib/stores.js";
    import { base } from "$app/paths";

    import { colorMap } from "$lib/constants.js";
    $: color = colorMap[$config.clusterBy]?.start || [0, 0, 0];
    $: second = colorMap[$config.clusterBy]?.end || [0, 0, 0];

</script>

<header data-sveltekit-reload>
    <a href="{base}/stories">Stories</a>
    <a href="{base}/search">Search</a>
</header>
<article style="--main-color: hsl({color[0]}, {color[1]}%, {color[2]}%); --second-color: hsl({second[0]}, {second[1]}%, {second[2]}%);">
    <slot />
</article>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: circular;
        background-color: black;
        color: white;
    }

    @font-face {
        font-family: circular;
        src: url("/font/CircularStd-Book.otf");
        font-weight: normal;
    }

    header {
        padding: 5px;
        /* position: absolute;
        top: 0;
        left: 0;
         */
    }

    a {
        color: white;
    }
</style>
