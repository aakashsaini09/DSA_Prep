import express from 'express'
import { loginUser } from './src/routes/auth.js';
import dotenv from 'dotenv'
const app = express()
const PORT = 4000;
dotenv.config()

app.post('/api/auth/user', loginUser)


app.listen(PORT, () => {
    // const dbConnect = mongoose.connect("mongodb+srv://aakashsaini948585:jXYSp8aOVcuYZoEB@cluster0.abmbj.mongodb.net/")
    // if(dbConnect){
    //     console.log("db Connected")
    // }else{
    //     console.log("db not Connected")
    // }
    console.log(`Server is running on ${PORT} port`);
})