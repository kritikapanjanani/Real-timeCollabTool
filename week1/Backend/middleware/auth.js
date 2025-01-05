const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Remove "Bearer " from the token string
    const token = authHeader.startsWith('Bearer') ? authHeader.slice(7).trim() : authHeader;

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your secret key from environment variables
        req.user = decoded; // Attach the decoded user info to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Error decoding token:', error);
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = { verifyToken };
