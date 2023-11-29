<script lang="ts">
    import type { PageData } from "./$types"
    import * as Avatar from '$components/ui/avatar'
    import defaultProfile from '$lib/assets/images/deffaultProfile.png'
    import Uploadbutton from '$components/dashboard/UploadButton.svelte'
    import DashLogo from '$components/dashboard/DashLogo.svelte'
    import Searchbar from '$components/dashboard/Searchbar.svelte'
    import StorageUsage from '$components/dashboard/StorageUsage.svelte'


    export let data: PageData
    $: info = data.profileData
</script>

<nav class="fixed bg-slate-800 w-full flex justify-between items-center mx-auto px-8 h-20">
    <DashLogo />
    <StorageUsage usedStorage={info.usedSpace} maxStorage={info.maxSpace} class="w-96 bg-slate-900" />
    <Searchbar />
    <Uploadbutton />
    <div class="mt-1">
        <Avatar.Root class="mx-auto">
            <Avatar.Image src={info.avatarUrl} alt={`@${info.username}`} />
            <Avatar.Fallback>A</Avatar.Fallback>
        </Avatar.Root>
        <span class="text-center align-middle">{info.username}</span>
    </div>
</nav>

<slot />