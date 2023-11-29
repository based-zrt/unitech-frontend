import type { PageServerLoad, Actions } from './$types'
import { setError, superValidate, actionResult } from 'sveltekit-superforms/server'
import { redirect } from '@sveltejs/kit'
import { isError } from '$lib/types'
import { loginSchema } from '$lib/schema'
import type { ApiError, LoginRequest, LoginResponse } from '$lib/server/apiTypes'
import { useApi } from '$lib/server/api'

export const load: PageServerLoad = ({ cookies }) => {
    // already logged in, straight to dashboard
    const token = cookies.get('token')
    if (token !== undefined) throw redirect(307, '/dash')

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
