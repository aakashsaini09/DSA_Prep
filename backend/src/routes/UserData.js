import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://aakashsaini948585:jXYSp8aOVcuYZoEB@cluster0.abmbj.mongodb.net/")

// ************************************Get all feeds *************************************************
export const addNewFeed = async(req, res) => {
    const { title, des, id} = req.body;
        await client.connect();
        const database = client.db('feedbacks');
        const feeds = database.collection('feedback');
        try { 
            const userFeeds = await feeds.insertOne({ 
                autherId: id,
                title: title,
                des: des
            })
            if (!userFeeds) {
                return res.json({ message: 'Server Error. Something went wrong!', success: false});
            }
            return res.json({
                message: 'feeds added successfully',
                feeds: userFeeds
            })
        }catch (error) {
            console.error("Insert error:", error);
            return res.json({ message: 'Server Error. Something went wrong!', success: false, error: error });
        }
}





// ************************************Get all feeds *************************************************
export const getUserFeedbacks = async(req, res) => {
    const {id} = req.body
    try {
        await client.connect();
        const database = client.db('feedbacks');
        const feeds = database.collection('feedback');
        const userFeeds = await feeds.find({ autherId: id}).toArray()
        return res.json({
            message: 'feeds retrieved successfully',
            success: true,
            feeds: userFeeds
        })
    } catch (error) {
        return res.json({ message: 'Server Error. Something went wrong!', success: false, error: error });
    }
}




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