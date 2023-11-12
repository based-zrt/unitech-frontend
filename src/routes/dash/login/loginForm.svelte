<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { formSchema, type FormSchema } from "./loginSchema";
    import type { SuperValidated } from "sveltekit-superforms";
    export let form: SuperValidated<FormSchema>;
</script>

<Form.Root {form} schema={formSchema} let:config class="flex flex-col items-center">
    <Form.Field {config} name="username">
      <Form.Item>
        <Form.Label class="text-xl" >Username</Form.Label>
        <Form.Input />
        <Form.Description></Form.Description>
        <Form.Validation />
      </Form.Item>
    </Form.Field>

    <Form.Field {config} name="password">
        <Form.Item>
          <Form.Label class="text-xl">Password</Form.Label>
          <Form.Input />
          <Form.Description></Form.Description>
          <Form.Validation />
        </Form.Item>
    </Form.Field>

    <Form.Button>Login</Form.Button>
    <Form.Button variant="link" href="/dash/register">Register</Form.Button>

    
    
    
  </Form.Root>