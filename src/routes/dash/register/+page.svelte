<script lang="ts">
    import * as Card from '$lib/components/ui/card'
    import { Label } from '$components/ui/label'
    import { Button } from '$components/ui/button'
    import * as  Alert  from '$components/ui/alert'
    import type { RegisterSchema } from '$lib/schema'
    import type { SuperValidated } from 'sveltekit-superforms'
    
    
    import RegisterForm from '$lib/RegisterForm.svelte'
    import Centered from '$lib/Centered.svelte'
    import logo from '$lib/assets/icons/logo_slate-700.png'
    export let form: SuperValidated<RegisterSchema>

    export let data: { errorMessage?: string } = {}
</script>


<Centered>

    <img class="w-48 lg:w-1/8 mb-10" src={logo} alt="Logo" />
    <Card.Root class="w-100 bg-slate-900">
        <Card.Header>
            <Card.Title class="text-2xl">Register a New Account</Card.Title>
        </Card.Header>
        {#if data.errorMessage!==''}
        <Alert.Root>
            <Alert.Title>{data.errorMessage}</Alert.Title>
        </Alert.Root>  <!--Ennek működnie kéne asszem, de idk I'm so lost -->
        {/if}
        <Card.Content>
            <RegisterForm {form} />
            <Label class="">Already have an account?</Label>
            <Button class="text-slate-400" variant="link" href="/dash/login">Sign in</Button>
        </Card.Content>
    </Card.Root>
</Centered>
