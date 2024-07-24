const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authCtrl = {
    register: async (req, res) => {
        try {
            const { fullname, username, email, password, gender } = req.body;
            let newUserName = username.toLowerCase().replace(/ /g, '')

            const user_name = await User.findOne({username: newUserName})
            if(user_name) return res.status(400).json({msg: "This user name already exists."})

            const user_email = await User.findOne({email})
            if(user_name) return res.status(400).json({msg: "This email already exists."})

            if(password.length < 6)
            return res.status(400).json({msg: "Password must be at least 6 characters."})

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = new User({
                fullname, username: newUserName, email, password: passwordHash, gender
            })

        
            const access_token = createAccessToken({id: newUser._id})
            const refresh_token = createRefreshToken({id: newUser._id})

            res.json({ 
                msg: 'Register success!' 

            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    login: async (req, res) => {
        try {
            // Login logic here
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    logout: async (req, res) => {
        try {
            // Logout logic here
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    generateAccessToken: async (req, res) => {
        try {
            // Token generation logic here
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
};

module.exports = authCtrl;
