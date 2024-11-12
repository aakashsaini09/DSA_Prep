import {z } from 'zod'
export const UserSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(5)
})


export const UserDataSchema = z.object({
    title: z.string().min(5)
})

