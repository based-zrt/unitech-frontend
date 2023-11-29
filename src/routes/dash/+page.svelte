<script lang="ts">
    import * as Dialog from '$lib/components/ui/dialog'

    import ImageContainer from '$components/dashboard/ImageContainer.svelte'
    import ImagePreviewDialog from '$components/dashboard/ImagePreviewDialog.svelte'

    export let data
    $: info = data.profileData
</script>
<div class="pt-32 pl-10">
    <div class="grid lg:grid-cols-5 gap-2 md:grid-cols-3 sm:grid-cols-2 ml-11 lg:ml-0">
        {#each info.uploads as image (image.id)}
            <Dialog.Root>
                <Dialog.Trigger>
                    <ImageContainer {...image} />
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title class="text-center pt-5 pb-5">Preview</Dialog.Title>
                        <Dialog.Description>
                            <ImagePreviewDialog {...image} />
                        </Dialog.Description>
                    </Dialog.Header>
                </Dialog.Content>
            </Dialog.Root>
        {/each}
    </div>
</div>

<!-- Footer -->
<!-- Footer -->
