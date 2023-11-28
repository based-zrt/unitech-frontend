import type { BackendRequest, BackendResponse } from './apiTypes'

export async function useApi(
    token: string,
    endpoint: string,
    method: string,
    payload: BackendRequest
): Promise<BackendResponse> {
    const settings: RequestInit = {
        method: method,
        headers: {
            Authorization: 'Bearer ' + token
        }
    }
    if (payload !== null) {
        settings['body'] = JSON.stringify(payload)
    }
    const response = fetch('https://api.unideb.tech' + endpoint, settings)
    return (await response).json()
}
