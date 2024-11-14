import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, verify, sign } from 'hono/jwt';
export const feedRoute = new Hono<{
    Bindings: {
	DATABASE_URL: string,
    JWT_SEC: string
	}
}>()

feedRoute.post('/get', async(c) => {
    return c.text("Invalid Credentials") 
})