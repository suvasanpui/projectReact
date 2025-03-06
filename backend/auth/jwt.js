// Import JSON Web Token library
const jwt = require('jsonwebtoken');

/**
 * Middleware to verify JWT token in request headers
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const jwtmiddleware = (req, res, next) => {
    // Get Authorization header from request
    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({ error: 'Token Not Found' });
    
    // Extract token from Bearer authorization header
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({ error: 'Unauthorized' });

    try{
        // Verify token using secret key from environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach decoded user data to request object
        req.user = decoded
        next();
    }catch(err){
        console.error(err);
        res.status(401).json({ error: 'Invalid token' });
    }
}

/**
 * Generate new JWT token for user
 * @param {Object} userData - User data to encode in token
 * @returns {string} JWT token valid for 5 minutes (300000 milliseconds)
 */
const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET, {expiresIn: 300000});
}

// Export middleware and token generator
module.exports = {jwtmiddleware, generateToken};