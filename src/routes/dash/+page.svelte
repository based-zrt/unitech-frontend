<script lang="ts">
    import * as Avatar from '$components/ui/avatar'
    import * as Dialog from '$lib/components/ui/dialog'
    import { onMount } from 'svelte'

    import defaultProfile from '$lib/assets/images/deffaultProfile.png'
    import ImageContainer from '$components/dashboard/ImageContainer.svelte'
    import ImagePreviewDialog from '$components/dashboard/ImagePreviewDialog.svelte'
    import Uploadbutton from '$components/dashboard/UploadButton.svelte'
    import DashLogo from '$components/dashboard/DashLogo.svelte'
    import Searchbar from '$components/dashboard/Searchbar.svelte'
    import StorageUsage from '$components/dashboard/StorageUsage.svelte'

    export let data
    $: info = data.profileData
</script>

<!-- Navbar -->
<nav class="fixed bg-slate-800 w-full flex justify-between items-center mx-auto px-8 h-20">
    <DashLogo />
    <StorageUsage usedStorage={info.usedSpace} maxStorage={info.maxSpace} class="w-96 bg-slate-900" />
    <Searchbar />
    <Uploadbutton />
    <div>
        <span class="text-center align-middle">{info.username}</span>
        <Avatar.Root class="mx-auto">
            <Avatar.Image src={defaultProfile} alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </div>
</nav>
<!-- Navbar -->

<!-- Body -->
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
<!-- Body -->

<!-- Footer -->
<!-- Footer -->
