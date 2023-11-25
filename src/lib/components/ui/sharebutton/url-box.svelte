<script lang="ts">
    import CopyClipboard from '../sharebutton/copyClipboard.svelte'
    export const generated = '';
    export const imageURL = 'i.unideb.tech/'+ generated;
    

</script>


<div class="w-auto border border-gray-300 p-2 my-2 cursor-text flex justify-between">
    <span>{imageURL}</span>
    <CopyClipboard copiedText={imageURL}/>
</div>