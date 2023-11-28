import type { PageServerLoad, Actions } from './$types'
import { fail } from '@sveltejs/kit'
import { setError, superValidate } from 'sveltekit-superforms/server'
import { loginSchema } from '$lib/schema'
import { redirect } from '@sveltejs/kit'
import { actionResult } from 'sveltekit-superforms/server'
import { error } from '@sveltejs/kit'
import { useApi } from '$lib/server/api'
import type { ApiError, LoginRequest, LoginResponse } from '$lib/server/apiTypes'
import { isError } from '$lib/types'

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

        const req: LoginRequest = {
            username: form.data.username,
            password: form.data.password
        }
        const data = await useApi(null, '/auth/login', 'POST', req)
        if (isError(data)) {
            const error = data as ApiError
            return setError(form, 'username', error.message)
        } else {
            const result = data as LoginResponse
            cookies.set('token', result.token, {})
            throw redirect(303, '/dash/')
        }
    }
}
