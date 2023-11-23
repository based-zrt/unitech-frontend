<script lang="ts">
import Download from '$components/downloadbutton/download.svelte'
import baseImage from '$lib/assets/images/unknownImage.jpg';

export let imageData = {
    imageId: undefined,
    imageName: undefined,
    imageSize: undefined,
    imageUploadDate: undefined,
    imageSource: undefined,
    imageLink: undefined,
};
 
//function generateImageLink(){}
</script>

<div class="cursor-pointer w-120 h-120 border-2 border-black mb-10">
    {#if imageData.imageSource}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="h-fit w-fit rounded-lg shadow-xl dark:shadow-gray-800" src={imageData.imageSource} alt="Image">
        <div class="h-100 border-4 border-white">
            <span>Image name: {imageData.imageName}</span>
            <span>Image size: {imageData.imageSize}</span>
            <span>Image upload date: {imageData.imageUploadDate}</span>
        </div>
    {:else}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="h-fit w-fit rounded-lg shadow-xl dark:shadow-gray-800" src={baseImage} alt="Default Image">
        <div class="h-100 border-2 border-dotted mt-2 border-white p-4">
            <span>Name: {imageData.imageName} <br></span>
            <span>Size: {imageData.imageSize} <br></span>
            <span>Uploaded: {imageData.imageUploadDate} <br></span>
        </div>
        <div class="h-fit w-fit mx-auto mt-5"><Download /></div>
    {/if}
</div>