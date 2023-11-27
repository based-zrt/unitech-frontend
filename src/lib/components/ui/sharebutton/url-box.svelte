<script lang="ts">
    import CopyClipboard from '../sharebutton/copyClipboard.svelte'
    export let imageURL =''; // TODO: need to fix the varriable export
    

</script>


<div class="w-auto border border-gray-500 p-2 my-2 cursor-text flex justify-between">
    <span>{imageURL}</span>
    <CopyClipboard copiedText={imageURL}/>
</div>