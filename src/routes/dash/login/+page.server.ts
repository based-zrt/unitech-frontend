import type { PageServerLoad, Actions } from './$types'
import { fail } from '@sveltejs/kit'
import { setError, superValidate } from 'sveltekit-superforms/server'
import { loginSchema } from '$lib/schema'
import { redirect } from '@sveltejs/kit'
import { actionResult } from 'sveltekit-superforms/server'
import { error } from '@sveltejs/kit'

interface LoginResponse {
    token: string
}
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
        form: superValidate(loginSchema)
    }
}

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const form = await superValidate(request, loginSchema)
        if (!form.valid) {
            return actionResult('failure', { form }, 400)
        }
        const response = await fetch('https://api.unideb.tech/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: form.data.username,
                password: form.data.password
            })
        })
        if (response.status === 200) {
            let token = ((await response.json()) as LoginResponse).token
            console.log('Login successful, token: ' + token)
            cookies.set('token', token, {})
            throw redirect(303, '/dash/')
        } else {
            let resp = (await response.json()) as ResponseType
            console.log(resp.message)
            return setError(form, 'username', resp.message)
        }
    }
}
