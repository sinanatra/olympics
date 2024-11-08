<script>
    import { markEntityLoopComplete } from "$lib/loopStatus";
</script>

<header>
    <div>
        <button on:click={markEntityLoopComplete}>Next Story</button>
    </div>
</header>

<style>
    header {
        background: rgb(246, 246, 246);
        color: black;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        margin-top: 100px;
    }
    header > div {
        flex: 0 0 150px;
        margin-bottom: 5px;
    }
</style>
