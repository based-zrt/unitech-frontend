<script lang="ts">
    import * as Form from '$lib/components/ui/form'
    import * as Card from '$lib/components/ui/card'
    import { Label } from '$components/ui/label'
    import { Button } from '$components/ui/button'
    import type { loginSchema, LoginSchema } from '$lib/schema.ts'
    import type { SuperValidated } from 'sveltekit-superforms'
    export let form: SuperValidated<LoginSchema>

    import LoginForm from '$lib/LoginForm.svelte'
    import Centered from '$lib/Centered.svelte'
    import logo from '$lib/assets/icons/bordered/logo_slate-700.png'
</script>

<Centered>
    <img class="w-48 lg:w-1/8 mb-10" src={logo} alt="Logo" />
    <Card.Root class="w-100 bg-slate-900">
        <Card.Header>
            <Card.Title class="text-2xl">Sign in</Card.Title>
        </Card.Header>

        <Card.Content>
            <LoginForm {form} />
            <Label class="">Don't have an account yet?</Label>
            <Button class="text-slate-400" variant="link" href="/dash/register">Register</Button>
        </Card.Content>
    </Card.Root>
</Centered>
