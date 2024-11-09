import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://aakashsaini948585:jXYSp8aOVcuYZoEB@cluster0.abmbj.mongodb.net/")
export const getAllUsers = async(req, res) => {
    await client.connect()
    const database = client.db('feedbacks')
    const users = database.collection('users');
    try {
        const allUsers = await users.find({}).toArray(); 
        if (allUsers.length === 0) {
            return res.json({
                message: 'No User Found',
            });
        }
        
        return res.json({
            message: "Success",
            success: true,
            users: allUsers
        })
    } catch (err) {
        console.log(err)
        return res.json({
                message: 'server error'
            }, {status: 404})
    }
}