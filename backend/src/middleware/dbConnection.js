import { MongoClient } from "mongodb";

export const connectDatabase = async() => {
    const client = new MongoClient("mongodb+srv://aakashsaini948585:jXYSp8aOVcuYZoEB@cluster0.abmbj.mongodb.net/")
    await client.connect()
    if(connection){
        return true
    }else{
        return false
    }
}