import type { ProfileInfo, UploadInfo } from '$lib/types'

export interface LoginRequest {
    username: string
    password: string
}

export interface RegisterRequest {
    username: string
    password: string
    email: string
    inviteKey: string
}

export type BackendRequest = LoginRequest | RegisterRequest | null

export type BackendResponse = ProfileInfo | UploadInfo
