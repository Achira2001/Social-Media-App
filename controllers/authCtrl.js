const User = require('../models/userModel'); // Note the corrected path
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authCtrl = {
    register: async (req, res) => {
        try {
            const { fullname, username, email, password, gender } = req.body;
            console.log(req.body);
            res.json({ msg: 'Registered!' });
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
