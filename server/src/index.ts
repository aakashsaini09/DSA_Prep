import { Hono } from 'hono'

const app = new Hono()
// ************************************auth*********************************
app.post('/api/auth/login', (c) => {
  return c.text('Hello Hono!')
})
app.post('/api/auth/signup', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/auth/getall', (c) => {
  return c.text('Hello Hono!')
})

// tkUABhJrAOtm2HDs
// postgresql://postgres.licespwzzrnfuqjeajtt:tkUABhJrAOtm2HDs@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
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
