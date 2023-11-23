<script>
import Download from '$components/downloadbutton/download.svelte'
import baseImage from '$lib/assets/images/unknownImage.jpg';
    export let srcImage;

    //Image variables
    export let imageName = "unknownImage.jpg";
    export let imageSize = "0MB";
    export let imageUploadDate ="2023.11.23";

</script>

<div class="cursor-pointer w-120 h-120 border-2 border-black mb-10">
    {#if srcImage}
        <img class="h-fit w-fit rounded-lg shadow-xl dark:shadow-gray-800" src={srcImage} alt="Image">
        <div class="h-100 border-4 border-white">
            <span>Image name: {imageName}</span>
            <span>Image size: {imageSize}</span>
            <span>Image upload date: {imageUploadDate}</span>
        </div>
    {:else}
        <img class="h-fit w-fit rounded-lg shadow-xl dark:shadow-gray-800" src={baseImage} alt="Default Image">
        <div class="h-100 border-2 border-dotted mt-2 border-white p-4">
            <span>Name: {imageName} <br></span>
            <span>Size: {imageSize} <br></span>
            <span>Uploaded: {imageUploadDate} <br></span>
        </div>
        <div class="h-fit w-fit mx-auto mt-5"><Download /></div>
    {/if}
</div>