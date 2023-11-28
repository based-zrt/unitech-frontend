import { useApi } from '$lib/server/api'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
    const id = params.id
    const data = await useApi(null, `/view/${id}`, 'GET')
    console.log(data)
    return {
        view: data
    }
}
