import type { ProfileInfo, UploadInfo, ViewResponse } from '$lib/types'

export interface LoginRequest {
    username: string
    password: string
}

export interface LoginResponse {
    token: string
}

export interface RegisterRequest {
    username: string
    password: string
    email: string
    inviteKey: string
}

export interface ApiError {
    message: string
    details: unknown
    error: {
        statusCode: number
        statusPhrase: string
    }
}

export type BackendRequest = LoginRequest | RegisterRequest | null

export type BackendResponse = ProfileInfo | UploadInfo | ViewResponse | LoginResponse
