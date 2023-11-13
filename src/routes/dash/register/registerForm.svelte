<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { formSchema, type FormSchema, } from "./registerSchema";
    import {formFields, type FormFields} from "./registerSchema";
    import type { SuperValidated } from "sveltekit-superforms";
    export let form: SuperValidated<FormSchema>;
</script>

<Form.Root {form} schema={formSchema} let:config>
    {#each formFields as field (field.name)}
        <Form.Field {config} name={field.name}>
            <Form.Item>
                <Form.Label class="text-xl">{field.label}</Form.Label>
                <Form.Input class="bg-slate-950"/>
                <Form.Validation />
            </Form.Item>
        </Form.Field>
    {/each}


    <!-- <Form.Field {config} name="username">
      <Form.Item >
        <Form.Label class="text-xl" >Username</Form.Label>
        <Form.Input class="bg-slate-950"/>
        <Form.Description></Form.Description>
        <Form.Validation />
      </Form.Item>
    </Form.Field>
    <Form.Field {config} name="password" >
        <Form.Item class="mb-5 ">
          <Form.Label class="text-xl" >Password</Form.Label>
          <Form.Input class="bg-slate-950"/>
          <Form.Description></Form.Description>
          <Form.Validation />
        </Form.Item>  
    </Form.Field>
    <Form.Field {config} name="password" >
      <Form.Item class="mb-5 ">
        <Form.Label class="text-xl" >Password again</Form.Label>
        <Form.Input class="bg-slate-950"/>
        <Form.Description></Form.Description>
        <Form.Validation />
      </Form.Item>  
  </Form.Field> -->
    <Form.Button class="w-full mt-5">Register account</Form.Button>  
  </Form.Root>