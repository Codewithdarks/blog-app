import jwt from 'jsonwebtoken';
import User from '../model/User.js';

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({message: 'No token, Authorization Denied'});
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'temporary_secret');
            const user = await User.findById(decoded.userId).select('-password');

            if (!user) {
                return res.status(401).json({message: 'User not found'});
            }

            req.user = user;
            next();
        } catch (jwtError) {
            return res.status(401).json({message: 'Invalid or expired token'});
        }
    } catch (error) {
        console.error('Auth middleware error:', error);
        return res.status(500).json({message: 'Server error in authentication'});
    }
};

export default auth;