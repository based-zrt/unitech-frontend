import type { PageServerLoad, Actions } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { registerSchema } from '$lib/schema'

interface ResponseType {
    message: string
    details: any
    error: {
        statusCode: number
        statusPhrase: string
    }
}
let responseMessage: string = ''

export const load: PageServerLoad = () => {
    return {
        form: superValidate(registerSchema),
        data: {
            errorMessage: responseMessage
        }
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
        const response = await fetch('https://api.unideb.tech', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: form.data.username,
                email: form.data.email,
                password: form.data.password,
                invitekey: form.data.inviteToken
            })
        })
        if (response.status === 200) {
            throw redirect(303, '/dash/login')
        } else {
            const resp = (await response.json()) as ResponseType
            responseMessage = resp.message
        }
    }
}
