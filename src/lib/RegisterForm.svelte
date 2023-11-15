<script lang="ts">
    import * as Form from '$lib/components/ui/form'
    import { registerSchema, type RegisterSchema } from '$lib/schema'
    import { formFields, type FormFields } from '$lib/schema'
    import type { SuperValidated } from 'sveltekit-superforms'
    export let form: SuperValidated<RegisterSchema>
</script>

<Form.Root method="POST" {form} schema={registerSchema} let:config>
    {#each formFields as field (field.name)}
        <Form.Field {config} name={field.name}>
            <Form.Item>
                <Form.Label class="text-xl">{field.label}</Form.Label>
                <Form.Input class="bg-slate-950" type={field.type} />
                <Form.Description />
                <Form.Validation />
            </Form.Item>
        </Form.Field>
    {/each}
    <Form.Button class="w-full">Register</Form.Button>
</Form.Root>

<!-- <Form.Root method="POST" {form} schema= {formSchema} let:config>
    {#each formFields as field (field.name)}
        <Form.Field {config} name={field.name}>
            <Form.Item>
                <Form.Label class="text-xl">{field.label}</Form.Label>
                <Form.Input class="bg-slate-950" type={field.type}/>
                <Form.Validation />
            </Form.Item >
        </Form.Field>
    {/each}
    <Form.Button class="w-full mt-5">Register account</Form.Button>  
  </Form.Root> -->
