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
// app.post('/api/user/addfeed/:id', addNewFeed)
// app.post('/api/user/getuserfeed', verifyUser, getUserFeedbacks)
// app.delete('/api/user/deleteuserfeed', verifyUser, deleteUsersFeed)
feedRoute.use('/*', async(c, next) => {
    await next()
})

feedRoute.post('/addfeed/:id', async(c) =>{
    const body = await c.req.json()
    const id = c.req.param('id').toString()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const feed = await prisma.feedbacks.create({
        data:{
            title: body.title,
            authorId: parseInt(id, 10),
            date: new Date().toISOString()
        }
    })
    if(!feed) {
        return c.json({
            message: "Server Error",
            success: false
        });
    }
    
    return c.json({
        message: "Feed Added successfully",
        success: true,
        feed: feed
    });
})


feedRoute.post('/getuserfeed', async(c) =>{
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try { 
        const feeds = await prisma.feedbacks.findMany({
            where: {
                authorId: body.id
            }
        })
        if(!feeds) {
            return c.json({
                message: "Server Error",
                success: false
            });
        }
        
        return c.json({
            message: "Fetched Successfully",
            success: true,
            feeds: feeds
        });
    } catch (error) {
        console.log("error is this: ", error)
        return c.json({
            message: "Server Error",
            success: false,
            error: error
        });
    }
})


feedRoute.delete('/deleteuserfeed', async(c) =>{
    const id = c.req.header('id')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const feed = await prisma.feedbacks.delete({
            where: {
                id: Number(id)
            }
        })
        if(!feed) {
            return c.json({
                message: "Server Error",
                success: false
            });
        }
        
        return c.json({
            message: "Deleted Successfully",
            success: true,
        });
    } catch (error) {
        return c.json({
            message: "Server Error",
            success: false,
            error: error
        });
    }
    
})
