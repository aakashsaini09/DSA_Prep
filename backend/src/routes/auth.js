import mongoose from "mongoose";

export const loginUser = (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    const connection = mongoose.connect("mongodb+srv://aakashsaini948585:jXYSp8aOVcuYZoEB@cluster0.abmbj.mongodb.net/");
    if(connection){
        
    }else{
        return res.json()
    }
}