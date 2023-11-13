import { z } from 'zod'
export const formSchema = z.object({
    email: z.string().email(),
    username: z.string().min(4).max(50),
    password: z.string().min(4).max(50),
    inviteToken: z.string()
})
export type FormSchema = typeof formSchema

export type FormFields = 'username' | 'email' | 'password' | 'inviteToken'
export const formFields: { name: FormFields; label: string; type: string }[] = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'inviteToken', label: 'Invitation Token', type: 'text' }
]
