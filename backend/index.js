import express from 'express'
import { loginUser } from './src/routes/auth';
const app = express()
const PORT = process.env.PORT;


app.post('/api/auth/user', loginUser)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
})