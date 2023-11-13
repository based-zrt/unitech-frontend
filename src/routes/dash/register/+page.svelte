<script lang="ts">
    import * as Form from '$lib/components/ui/form';
    import * as Card from "$lib/components/ui/card";
    import { Label } from '$components/ui/label';
    import { Button } from '$components/ui/button';
    import type { formSchema, FormSchema } from './registerSchema';
    import type { SuperValidated } from 'sveltekit-superforms';
    export let form: SuperValidated<FormSchema>;
    import RegisterForm from './registerForm.svelte';
    import Centered from '$lib/Centered.svelte';
    import logo from '$lib/assets/icons/logo_slate-700.png';
    

</script>

<Centered> 
  <img class="w-48 lg:w-1/8 mb-10" src={logo} alt="Logo">
  <Card.Root class="w-100 bg-slate-900">
    <Card.Header>
      <Card.Title class="text-2xl">Register a New Account</Card.Title>
    </Card.Header>

    <Card.Content>
      <RegisterForm {form}></RegisterForm>
      <Label class="">Already have an account?</Label>
      <Button class="text-slate-400" variant="link" href="/dash/login">Sign in</Button>
    </Card.Content>
  </Card.Root>
</Centered>


