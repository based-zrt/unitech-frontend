import { goto } from '$app/navigation'
import { useApi } from '$lib/server/api'
import type { ProfileInfo } from '$lib/types'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies }) => {
    const token = cookies.get('token')
    if (token == undefined) goto('/dash/login')

    const profileData = (await useApi(token as string, '/profile/info', 'GET', null)) as ProfileInfo
    return {
        profileData
    }
}
