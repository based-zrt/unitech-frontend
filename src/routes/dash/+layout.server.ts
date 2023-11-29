import { useApi } from '$lib/server/api'
import { isError, type ProfileInfo } from '$lib/types'
import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ cookies }) => {
    const token = cookies.get('token')
    if (token === undefined) throw redirect(307, '/login')

    const res = await useApi(token as string, '/profile/info', 'GET')
    if (isError(res)) {
        // invalid authentication
        throw redirect(307, '/login')
    }

    const profileData = res as ProfileInfo
    return {
        profileData
    }
}
