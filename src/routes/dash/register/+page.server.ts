import type { PageServerLoad, Actions } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { setError, superValidate } from 'sveltekit-superforms/server'
import { registerSchema } from '$lib/schema'
import type { ApiError, RegisterRequest } from '$lib/server/apiTypes'
import { useApi } from '$lib/server/api'
import { isError } from '$lib/types'

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
        const req: RegisterRequest = {
            username: form.data.username,
            email: form.data.email,
            password: form.data.password,
            inviteKey: form.data.inviteToken
        }
        const res = await useApi(null, '/auth/register', 'POST', req)
        if (isError(res)) {
            const error = res as ApiError
            const wrongField = error.details[0]
            switch (true) {
                case wrongField[0] === 0:
                    return setError(form, 'username', error.message)
                case wrongField[0] === 1:
                    return setError(form, 'email', error.message)
                case wrongField[0] === 2:
                    return setError(form, 'password', error.message)
                case wrongField[0] === 3:
                    return setError(form, 'inviteToken', error.message)
            }
        } else {
            throw redirect(303, '/dash/login/')
        }
    }
}
