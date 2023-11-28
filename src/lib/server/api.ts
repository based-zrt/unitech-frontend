import type { BackendRequest, BackendResponse } from './apiTypes'

export async function useApi(
    token: string | null = null,
    endpoint: string,
    method: string,
    payload: BackendRequest | null = null
): Promise<BackendResponse> {
    const settings: RequestInit = {
        method: method
    }
    if (payload !== null) settings['body'] = JSON.stringify(payload)
    if (token !== null) settings['headers'] = { Authorization: 'Bearer ' + token }

    const response = fetch('https://api.unideb.tech' + endpoint, settings)
    return (await response).json()
}
