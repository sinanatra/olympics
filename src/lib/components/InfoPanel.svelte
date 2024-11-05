<script>
    import { highlightedEntities } from "$lib/stores.js";
    export let currentStory;
</script>

<div class="info">
    {#if currentStory}
        <div class="title">
            <h1>{currentStory.title}</h1>
        </div>
        <div class="content">
            <div class="description">
                <p>{currentStory.description}</p>
            </div>
            <div class="methodology">
                <p>{currentStory.methodology}</p>
            </div>
        </div>
    {:else}
        <!-- <p>No story selected.</p> -->
    {/if}
    <!-- {#if $highlightedEntities.length === 0}
        <p>No entities highlighted.</p>
    {/if} -->
</div>

<style>
    .info {
        background: black;
        padding: 20px;
        color: var(--main-color);
        border-top: 1px solid var(--main-color);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .title h1 {
        font-size: 24px;
        margin: 0;
        color: var(--main-color);
    }

    .content {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 20px;
    }

    .description {
        color: var(--main-color);
        border-right: 1px solid var(--main-color);
        padding-right: 15px;
        column-count: 2;
        column-gap: 20px;
    }

    .description p,
    .methodology p {
        margin: 0;
        font-size: 14px;
    }

    .methodology {
        color: var(--main-color);
    }
</style>
