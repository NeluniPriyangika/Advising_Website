const googleauthMiddleware = (req, res, next) => {
    // Example middleware for authentication
    // Add your authentication logic here
    const token = req.headers.authorization;
    if (token) {
        // Process token and attach user to request
        next();
    } else {
        res.status(403).json({ message: 'Unauthorized' });
    }
};

module.exports = googleauthMiddleware;
