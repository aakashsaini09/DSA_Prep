import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, verify, sign } from 'hono/jwt';
export const userRoute = new Hono<{
    Bindings: {
	DATABASE_URL: string,
    JWT_SEC: string
	}
}>()



userRoute.post('/login', async(c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try {
    const user = await prisma.user.findFirst({
      where:{
        email: body.email,
        password: body.password
      }
    })
    if(!user){
      c.status(403);
      return c.json({
        message: "Incorrect Credentials"
      })
    }
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SEC)
    return c.json({
      message: "signin Success",
      user: user
    })
  } catch (err) {
    c.status(411);
    return c.text("Invalid Credentials")
  }
})



userRoute.post('/signup', async(c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try {
    const user = await prisma.user.create({
      data:{
        name: body.name,
        email: body.email,
        accepting: true,
        password: body.password
      }
    })
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SEC)
    return c.text('Sign-up Successfully!')
  } catch (err) {
    c.status(411);
    return c.text("Invalid Credentials")
  }
})



userRoute.get('/getall', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try {
    const users = await prisma.user.findMany()
    if(!users){
      c.status(403);
      return c.json({
        message: "Server Error"
      })
    }
    
    return c.json({
      user: users
    })
  } catch (err) {
    c.status(411);
    return c.json({
        message: "Error while fetching blog post",
        err: err
    })
  }
})


