import type { PageServerLoad, Actions } from './$types'
import { fail } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { loginSchema } from '$lib/schema'
import fetch from 'node-fetch'

export const load: PageServerLoad = () => {
    return {
        form: superValidate(loginSchema)
    }
}

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, loginSchema)
        if (!form.valid) {
            return fail(400, {
                form
            })
        }
        try {
            // TODO: Adjust to backend endpoint
            const response = await fetch('BACKEND', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Adjust content type based on what your backend expects
                    // Add any necessary headers (e.g., authorization headers)
                },
                body: JSON.stringify({
                    // or body: form.data, remains to be tested
                    username: form.data.username,
                    password: form.data.password
                })
            })
            if (!response.ok) {
                throw new Error('Network response was NOT ok.')
            }

            // You might choose to process the response from the backend here if needed
            // For example, getting data back from the backend
            const responseData = await response.json()

            return {
                form: responseData // Optionally, return the response from the backend to the client
            }
        } catch (error) {
            return fail(500, {
                error: error
            })
        }
    }
}
