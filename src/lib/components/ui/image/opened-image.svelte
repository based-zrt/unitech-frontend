<script lang="ts">
import Download from '$components/downloadbutton/download.svelte'
import baseImage from '$lib/assets/images/unknownImage.jpg';
import Share from '../sharebutton/share.svelte'

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

<div class="cursor-pointer w-120 h-120 mb-10">
    {#if imageData.imageSource}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="h-fit w-fit rounded-lg shadow-xl dark:shadow-gray-800" src={imageData.imageSource} alt="Image">
        <div class="h-100 mt-2 p-4 border-y-2">
            <span>Image name: {imageData.imageName}</span>
            <span>Image size: {imageData.imageSize}</span>
            <span>Image upload date: {imageData.imageUploadDate}</span>
        </div>
    {:else}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="h-fit w-fit rounded-lg shadow-xl dark:shadow-gray-800" src={baseImage} alt="Default Image">
        <div class="h-100 mt-2 p-4 border-y-2">
            <span>Name: {imageData.imageName} <br></span>
            <span>Size: {imageData.imageSize} <br></span>
            <span>Uploaded: {imageData.imageUploadDate} <br></span>
        </div>
        <div class="flex flex-row justify-center">
            <div class="mx-2 my-2"><Download /></div>
            <div class="mx-2 my-2"><Share /></div>
            
        </div>
        
    {/if}
</div>