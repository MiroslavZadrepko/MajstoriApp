const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Craftsman = require('../models/craftsmanModel');
const User = require('../models/userModel');

/** REGISTER NEW USER
 *  POST api/user 
 */
const addUser = asyncHandler(async (req, res) => {

    const { user_name, user_email, user_password } = req.body;

    //check if all fields are filled 
    if (!user_name || !user_email || !user_password) {
        res.status(400).json({message: 'Please, fill up the form' });
        throw new Error('Please, fill up the form');
    }

    //check if user exists 
    const userExists = await User.findOne({ user_email })
    if (userExists) {
        res.status(400).json({message: 'That email is registered'});
        throw new Error('that email is registered');  
    }

    //hashing the pass 
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(user_password, salt);

    //finally create user
    const user = await User.create({
        user_name,
        user_email,
        user_password: hashedPass,
        admin: false,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            user_name: user.user_name,
            user_email: user.user_email,
            admin: user.admin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({message: 'Invalid data'});
        throw new Error('Invalid data');
    }
});

/** login nad auth user
 *  POST api/user/login
 */
const login = asyncHandler(async (req, res) => {

    const { user_email, user_password } = req.body;

    const user = await User.findOne({ user_email });

    if (user && (await bcrypt.compare(user_password, user.user_password))) {
        res.json({
            _id: user.id,
            user_name: user.user_name,
            user_email: user.user_email,
            admin: user.admin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({message: 'Invalid data'});
        throw new Error('Invalid data')
    }
});

/** get user data
 * GET api/user/me 
 * private route
 */
const getMe = asyncHandler(async (req, res) => {   
    res.status(200).json(req.user)
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
}

/** Get all craftsman, needs to be done!!!!!!!!!!
 * GET api/user
 */
const getCraftsmen = asyncHandler(async (req, res) => {
    const craftsmen = await Craftsman.find();
    res.status(200).json(craftsmen)
});

module.exports = {
    addUser,
    login,
    getMe,
    getCraftsmen,
};