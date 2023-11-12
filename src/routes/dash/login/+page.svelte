<script lang="ts">
    import * as Form from '$lib/components/ui/form';
    import * as Card from "$lib/components/ui/card";
    import type { formSchema, FormSchema } from './loginSchema'
    import type { SuperValidated } from 'sveltekit-superforms';
    export let form: SuperValidated<FormSchema>;

    import LoginForm from './loginForm.svelte';
    import Centered from '$lib/Centered.svelte'
    import logo from '$lib/assets/icons/logo_color.png'

</script>

<Centered> 
  <img class="w-48 lg:w-1/4 mb-10" src={logo} alt="Logo">
  <Card.Root>
    <Card.Header>
      <Card.Title class="text-2xl">Sign in</Card.Title>
    </Card.Header>
    
    <Card.Content>
      <LoginForm  {form}></LoginForm>
    </Card.Content>
  </Card.Root>
</Centered>


