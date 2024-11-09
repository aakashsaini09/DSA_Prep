import express from 'express'
import { loginUser, signUp } from './src/routes/auth.js';
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import {addNewFeed, getAllUsers, getUserFeedbacks} from './src/routes/UserData.js'
import {verifyUser} from './src/middleware/verifyToken.js'
const app = express()
app.use(bodyParser.json())
const PORT = 4000;
dotenv.config()
app.use(cors())

app.post('/api/auth/login', loginUser)
app.post('/api/auth/signup', signUp)
app.get('/api/auth/getall', getAllUsers)

app.post('/api/user/getdata', getAllUsers)
app.post('/api/user/addfeed', verifyUser, addNewFeed)
app.post('/api/user/getuserfeed', verifyUser, getUserFeedbacks)

app.listen(PORT, () => {
    // const dbConnect = mongoose.connect("mongodb+srv://aakashsaini948585:jXYSp8aOVcuYZoEB@cluster0.abmbj.mongodb.net/")
    // if(dbConnect){
    //     console.log("db Connected")
    // }else{
    //     console.log("db not Connected")
    // }
    console.log(`Server is running on ${PORT} port`);
})