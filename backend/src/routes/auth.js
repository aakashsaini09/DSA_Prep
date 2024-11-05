import mongoose from "mongoose";

export const loginUser = (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    mongoose.connect(process.env)
}