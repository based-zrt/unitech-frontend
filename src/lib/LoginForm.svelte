<script lang="ts">
    import * as Form from '$lib/components/ui/form'
    import { loginSchema, type LoginSchema } from '$lib/schema'
    import type { SuperValidated } from 'sveltekit-superforms'
    export let form: SuperValidated<LoginSchema>
</script>

<Form.Root {form} schema={loginSchema} let:config>
    <Form.Field {config} name="username">
        <Form.Item>
            <Form.Label class="text-xl">Username</Form.Label>
            <Form.Input class="bg-slate-950" />
            <Form.Description />
            <Form.Validation />
        </Form.Item>
    </Form.Field>
    <Form.Field {config} name="password">
        <Form.Item class="mb-5 ">
            <Form.Label class="text-xl">Password</Form.Label>
            <Form.Input class="bg-slate-950" />
            <Form.Description />
            <Form.Validation />
        </Form.Item>
    </Form.Field>
    <Form.Button class="w-full">Login</Form.Button>
</Form.Root>
