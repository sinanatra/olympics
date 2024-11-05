<script>
    import { config } from "$lib/stores.js";

    import { colorMap } from "$lib/constants.js";
    $: color = colorMap[$config.clusterBy]?.start || [0, 0, 0];
</script>

<article style="--main-color: hsl({color[0]}, {color[1]}%, {color[2]}%);">
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
</style>
