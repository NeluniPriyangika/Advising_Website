const User = require('../models/googleUser');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

// Google Login Controller
const googleLogin = async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        });
        const { sub, email, name } = ticket.getPayload();

        let user = await User.findOne({ googleId: sub });
        if (!user) {
            user = new User({ googleId: sub, email, name });
            await user.save();
        }

        res.json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Google login failed' });
    }
};

module.exports = { googleLogin };
