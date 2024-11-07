import { MongoClient } from "mongodb";
import bcrypt from 'bcrypt'
const client = new MongoClient("mongodb+srv://aakashsaini948585:jXYSp8aOVcuYZoEB@cluster0.abmbj.mongodb.net/")
const myPlainText = 'verysecretcode'



export const signUp = async(req, res) => {
    const {name, email, password} = req.body;
    await client.connect()
    const database = client.db('feedbacks')
    const users = database.collections('users');
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt){
        bcrypt.hash(myPlainText, salt, function(err, hash){
            try {
                users.insertOne({name: name, email: email, password: hash});
            } catch (err) {
                return res.json({
                        message: 'server error'
                    })
            }if(err){
                return res.json({
                    message: "password hashing failed!"
                })
            }
        })
    })
    
}




export const loginUser = async(req, res) => {
    const {email, password} = req.body;
    await client.connect()
    const database = client.db('feedbacks')
    const users = database.collections('users');
    try {
        const user = users.findOne({email: email});
        if(!user){
            return res.json({
                message: 'User not found with this gmail'
            })
        }else{
            const comparePassword = bcrypt.compare(myPlainText, password)
            if(!comparePassword){
                return res.json({
                    message: 'Incorrect Password. Please try again.'
                })
            }else{

            }
        }
    } catch (err) {
        return res.json({
                message: 'server error'
            })
    }
}


