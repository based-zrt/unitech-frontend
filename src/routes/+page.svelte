<script lang="ts">
    import { Button } from '$components/ui/button'
    import Centered from '$lib/Centered.svelte'

    import logo from '$lib/assets/icons/logo_color.png'
</script>

<Centered>
    <img class="w-48 lg:w-1/4" src={logo} alt="Logo">
    <h1
    class="text-4xl lg:text-8xl uppercase mt-10 mb-5 text-slate-300">
        unideb.tech
    </h1>
    <h2 class="text-l lg:text-4xl text-slate-300 mb-10"> The Best Image hosting service</h2>
    <Button 
        class="text-xl lg:text-4xl text-slate-400" 
        href="/dash/login" 
        variant="link">
        Login
    </Button>
</Centered>
