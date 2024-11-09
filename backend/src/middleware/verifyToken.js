import jwt from 'jsonwebtoken'

const mySecretText = 'verysecretcodee'
export const verifyUser = async(req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.'});
    }
    try {
        const decoded = jwt.verify(token, mySecretText);
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err)
        return res.status(403).json({ message: 'Invalid token.', success: false, token: token, error: err });
    }
}
