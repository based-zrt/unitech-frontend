<script>
    import { onMount } from 'svelte'
    import deffaultProfile from '$lib/assets/images/deffaultProfile.png'

    let profilePicture = deffaultProfile
    let username = 'John Doe'
    let email = 'johndoe@example.com'
    let password = '********'

    onMount(() => {
        // Fetch profile picture and user data from API
        // and update the variables accordingly
    })

    function changeProfilePicture() {
        // Logic to change the profile picture
    }

    function saveModifications() {
        // Logic to save the modified username, email, and password
    }
</script>

<div class="w-full">
    <div class="bg-slate rounded">
        <div class="flex items-center border-y-4 w-full p-5">
            <div class="w-52 h-52 rounded-full overflow-hidden">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="w-full h-full object-cover" src={profilePicture} alt="Profile Picture" />
            </div>
            <button class="ml-auto mt-auto bg-slate-500 text-slate py-2 px-4 rounded" on:click={changeProfilePicture}>
                Change Profile Picture
            </button>
        </div>

        <div class="mt-8 border-b-4 pb-5">
            <div class="mb-4 ml-4 grid grid-cols-2 w-fit">
                <label for="username" class="font-bold mb-2">Username</label>
                <input
                    type="text"
                    id="username"
                    class="p-2 rounded border border-slate text-slate-600"
                    bind:value={username}
                />
            </div>

            <div class="mb-4 ml-4 grid grid-cols-2 w-fit">
                <label for="email" class="font-bold mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    class="p-2 rounded border border-slate text-slate-600"
                    bind:value={email}
                />
            </div>

            <div class="mb-4 ml-4 grid grid-cols-2 w-fit">
                <label for="password" class="font-bold mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    class="p-2 rounded border border-slate text-slate-600"
                    bind:value={password}
                />
            </div>

            <button class="bg-red-600 text-slate py-2 px-4 rounded ml-4" on:click={saveModifications}>
                Save Modifications
            </button>
        </div>
    </div>
</div>
