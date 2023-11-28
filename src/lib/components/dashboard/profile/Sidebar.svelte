<script>
    import DashLogo from '$lib/components/dashboard/DashLogo.svelte'
    import AdvancedSettings from '$lib/components/dashboard/profile/AdvancedSettings.svelte'
    import ProfileSettings from '$lib/components/dashboard/profile/ProfileSettings.svelte'
    import Credits from '$lib/components/dashboard/profile/Credits.svelte'

    export let activeTab = ''

    const tabs = [
        { id: 'profile', label: 'Profile' },
        { id: 'advanced', label: 'Advanced' },
        { id: 'upload', label: 'Upload' },
        { id: 'credits', label: 'Credits' }
    ]
</script>

<div class="">
    <div class="flex h-screen">
        <div class="w-1/6 bg-slate-700">
            <div class="border-b-4 rounded-3xl flex m-2 pb-1">
                <DashLogo />
                <div class="mx-auto my-auto text-2xl">unideb.tech</div>
            </div>
            <ul class="py-4">
                {#each tabs as tab}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <li
                        class="px-4 py-2 cursor-pointer hover:bg-gray-600"
                        class:selected={activeTab === tab.id}
                        on:click={() => (activeTab = tab.id)}
                    >
                        {tab.label}
                    </li>
                {/each}
            </ul>
        </div>

        {#if activeTab === 'profile'}
            <ProfileSettings />
        {:else if activeTab === 'advanced'}
            <AdvancedSettings />
        {:else if activeTab === 'credits'}
            <Credits />
        {/if}
    </div>
</div>

<style>
    .selected {
        background-color: #4299e1;
    }
</style>
