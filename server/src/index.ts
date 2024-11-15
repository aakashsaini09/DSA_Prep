import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, verify, sign } from 'hono/jwt';
import { userRoute } from './routes/user';
import { feedRoute } from './routes/feed';
import { cors } from 'hono/cors';
// ************************************auth*********************************
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SEC: string
	}
}>();

app.use('/*', cors())
app.route('/api/auth/user', userRoute) // signup, login, getall
app.route('/api/auth/feed', feedRoute) // delete, add, getuser's


app.get('/api/auth/getall', (c) => {
  return c.text('Hello Hono!')
})
// supabase Password
// tkUABhJrAOtm2HDs
// supabase Conn-String
// postgresql://postgres.licespwzzrnfuqjeajtt:tkUABhJrAOtm2HDs@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
// Accelrate Conn-String
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNDQ2NGRmZTctODQwMi00N2ZlLTkwNTQtMDY1ZjdlODJlNzdlIiwidGVuYW50X2lkIjoiZjJlN2IyMDM3Y2ExMzdjYmYzOGVkMTg5M2YyNDQ0NTk4YjY3MmU1YTQ4YWI4ZGI0MzBiZGYyN2Q2NWIxNWRiOSIsImludGVybmFsX3NlY3JldCI6IjUxMTNjMWYxLTQyMWQtNDM5OC05Yjg4LWYxOGRhZDQwYjcxMSJ9.Tid2buM1bhmraD2e4ntr6Z3pGNeWJk9_OlIgh69uiCQ"
// ************************************userdata*********************************
app.get('/api/user/getdata', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/user/addfeed/:id', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/user/getuserfeed', (c) => {
  return c.text('Hello Hono!')
})
app.delete('/api/user/deleteuserfeed', (c) => {
  return c.text('Hello Hono!')
})


// app.post('/api/auth/login', loginUser)
// app.post('/api/auth/signup', signUp)
// app.get('/api/auth/getall', getAllUsers)

// app.post('/api/user/getdata', getAllUsers)
// app.post('/api/user/addfeed/:id', addNewFeed)
// app.post('/api/user/getuserfeed', verifyUser, getUserFeedbacks)
// app.delete('/api/user/deleteuserfeed', verifyUser, deleteUsersFeed)

export default app
