import { MongoClient } from "mongodb";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const client = new MongoClient("mongodb+srv://aakashsaini948585:jXYSp8aOVcuYZoEB@cluster0.abmbj.mongodb.net/")
const myPlainText = 'verysecretcodee'

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        await client.connect();
        const database = client.db('feedbacks');
        const users = database.collection('users');
        const saltRounds = 10;

        // Check if user already exists
        const user = await users.findOne({ email: email });
        if (user) {
            return res.json({
                message: "User already exists with this email"
            });
        }

        // Hash the password using bcrypt
        const hash = await bcrypt.hash(password, saltRounds);

        // Insert new user
        await users.insertOne({ name: name, email: email, password: hash });

        // Generate JWT token
        const token = jwt.sign({ userId: email }, 'your_secret_key'); // Replace 'your_secret_key' with an environment variable

        // Send success response with token
        return res.json({
            message: "Sign-up done",
            token: token
        });
    } catch (err) {
        console.error(err);
        return res.json({
            message: 'Server error'
        });
    }
};




export const loginUser = async(req, res) => {
    const {email, password} = req.body;
    await client.connect()
    const database = client.db('feedbacks')
    const users = database.collection('users');
    try {
        const user = await users.findOne({email: email});
        if(!user){
            return res.json({
                message: 'User not found with this gmail'
            })
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) {
            return res.json({
                message: 'Incorrect Password. Please try again.'
            });
        }
        const token = jwt.sign(
            { userId: user._id, email: user.email }, myPlainText);
        return res.json({
            message: "User exist",
            success: true,
            token: token,
            user: user
        })
    } catch (err) {
        console.log(err)
        return res.json({
                message: 'server error'
            }, {status: 404})
    }
}


