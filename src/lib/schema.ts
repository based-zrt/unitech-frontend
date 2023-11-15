// Login and Register Form Schema should be one file

import { z } from 'zod'

export const loginSchema = z.object({
    username: z.string().min(4).max(50),
    password: z.string().min(4).max(50)
})
export type LoginSchema = typeof loginSchema

export const registerSchema = z.object({
    email: z.string().email(),
    username: z.string().min(4).max(50),
    password: z.string().min(4).max(50),
    inviteToken: z.string()
})
export type RegisterSchema = typeof registerSchema

export type FormFields = 'username' | 'email' | 'password' | 'inviteToken'
export const formFields: { name: FormFields; label: string; type: string }[] = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'inviteToken', label: 'Invitation Token', type: 'text' }
]
