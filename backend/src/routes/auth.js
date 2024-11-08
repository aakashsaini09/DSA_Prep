import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const client = new MongoClient("mongodb+srv://aakashsaini948585:jXYSp8aOVcuYZoEB@cluster0.abmbj.mongodb.net/")
const myPlainText = 'verysecretcodee'




export const signUp = async(req, res) => {
    const {name, email, password} = req.body;
    await client.connect()
    const database = client.db('feedbacks')
    const users = database.collection('users');
    const saltRounds = 10;
    const user = await users.findOne({email: email});
    bcrypt.genSalt(saltRounds, function(err, salt){
        bcrypt.hash(password, salt, function(err, hash){
            try {
                if(!user){
                    users.insertOne({name: name, email: email, password: hash});
                    return res.json({
                        message: "Sign-up done"
                    })
                }else{
                    return res.json({
                        message: "User already exist with this gmail"
                    })
                }
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
    const users = database.collection('users');
    try {
        const user = users.findOne({email: email});
        if(!user){
            return res.json({
                message: 'User not found with this gmail'
            })
        }
        const comparePassword = bcrypt.compare(myPlainText, password)
        if(!comparePassword){
            return res.json({
                message: 'Incorrect Password. Please try again.'
            })
        }
        return res.json({
            message: "User exist",
            user: user
        })
    } catch (err) {
        console.log(err)
        return res.json({
                message: 'server error'
            }, {status: 404})
    }
}


