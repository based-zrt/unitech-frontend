<script>
    import baseImage from '$lib/assets/images/unknownImage.jpg';
    export let srcImage;
</script>

<div class="cursor-pointer w-60 h-60 border-2 border-black mb-10">
    {#if srcImage}
        <img class="h-auto rounded-lg shadow-xl dark:shadow-gray-800" src={srcImage} alt="Image">
    {:else}
        <img class="h-auto rounded-lg shadow-xl dark:shadow-gray-800" src={baseImage} alt="Default Image">
    {/if}
</div>