<script lang="ts">
    import baseImage from '$lib/assets/images/unknownImage.jpg';
    
    export let id: string
    export let user: string
    export let url: string
    export let size: number
    export let fileName: number
    export let uploadDate: number

</script>

<div class="cursor-pointer w-60 h-60 border-2 border-black mb-10">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    {#if id}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="h-auto rounded-lg shadow-xl dark:shadow-gray-800" src={`https://api.unideb.tech/view/${id}/raw`} alt="Image">
    {:else}
        <img class="h-auto rounded-lg shadow-xl dark:shadow-gray-800" src={baseImage} alt="Default Image">
    {/if}
</div>