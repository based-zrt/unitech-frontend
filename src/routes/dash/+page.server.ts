import { useApi } from '$lib/server/api'
import type { ProfileInfo } from '$lib/types'
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies }) => {
    const token = cookies.get('token')
    if (token === undefined) throw redirect(307, '/dash/login')

    const profileData = (await useApi(token as string, '/profile/info', 'GET')) as ProfileInfo
    return {
        profileData
    }
}
