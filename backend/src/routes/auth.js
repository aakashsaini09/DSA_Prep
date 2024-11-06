import { connectDatabase } from "../middleware/dbConnection";

export const loginUser = async(req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    const connection = connectDatabase()
    try {
        
    } catch (err) {
        
    }
}