<script lang="ts">
    import baseImage from '$lib/assets/images/unknownImage.jpg';
    
    export let imageData = {
    imageId: undefined,
    imageName: undefined,
    imageSize: undefined,
    imageUploadDate: undefined,
    imageSource: undefined,
    imageLink: undefined,
    isPublic: false
};

</script>

<div class="cursor-pointer w-60 h-60 border-2 border-black mb-10">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    {#if imageData.imageSource}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="h-auto rounded-lg shadow-xl dark:shadow-gray-800" src={imageData.imageSource} alt="Image">
    {:else}
        <img class="h-auto rounded-lg shadow-xl dark:shadow-gray-800" src={baseImage} alt="Default Image">
    {/if}
</div>