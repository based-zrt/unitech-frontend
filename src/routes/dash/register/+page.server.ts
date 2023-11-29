import type { PageServerLoad, Actions } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { setError, superValidate } from 'sveltekit-superforms/server'
import { registerSchema } from '$lib/schema'

interface ResponseType {
    message: string
    details: any
    error: {
        statusCode: number
        statusPhrase: string
    }
}

export const load: PageServerLoad = () => {
    return {
        form: superValidate(registerSchema)
    }
}

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, registerSchema)
        if (!form.valid) {
            return fail(400, {
                form
            })
        }
        const response = await fetch('https://api.unideb.tech/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: form.data.username,
                email: form.data.email,
                password: form.data.password,
                inviteKey: form.data.inviteToken
            })
        })
        if (response.status === 200) {
            console.log(response)
            throw redirect(303, '/dash/login/')
        } else {
            console.log(response)
            const resp = (await response.json()) as ResponseType
            let responseError = resp.details
            let responseMessage = resp.message
            switch (true) {
                case responseError[0] === 0:
                    return setError(form, 'username', responseMessage)
                case responseError[0] === 1:
                    return setError(form, 'email', responseMessage)
                case responseError[0] === 2:
                    return setError(form, 'password', responseMessage)
                case responseError[0] === 3:
                    return setError(form, 'inviteToken', responseMessage)
            }
        }
    }
}
