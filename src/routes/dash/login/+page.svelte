<script lang="ts">
    import * as Form from '$lib/components/ui/form';
    import * as Card from "$lib/components/ui/card";
    import { Label } from '$components/ui/label'
    import { Button } from '$components/ui/button'
    import type { formSchema, FormSchema } from './loginSchema'
    import type { SuperValidated } from 'sveltekit-superforms';
    export let form: SuperValidated<FormSchema>;

    import LoginForm from './loginForm.svelte';
    import Centered from '$lib/Centered.svelte'
    import logo from '$lib/assets/icons/logo_slate-700.png'
    

</script>

<Centered> 
  <img class="w-48 lg:w-1/4 mb-10" src={logo} alt="Logo">
  <Card.Root class="w-48 lg:w-1/4 bg-slate-900">
    <Card.Header>
      <Card.Title class="text-2xl">Sign in</Card.Title>
    </Card.Header>

    <Card.Content>
      <LoginForm {form}></LoginForm>
      <Label class="">Don't have an account yet?</Label>
      <Button class="text-slate-400" variant="link" href="/dash/register"> Register</Button>
    </Card.Content>
  </Card.Root>
</Centered>


