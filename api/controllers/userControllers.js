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
        res.status(400);
        throw new Error('fill up the form, pls');
    }

    //check if user exists 
    const userExists = await User.findOne({ user_email })
    if (userExists) {
        res.status(400);
        throw new Error('that email is registered');
    }

    //hashing the pass 
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(user_password, salt);

    //finally create user
    const user = await User.create({
        user_name,
        user_email,
        user_password: hashedPass
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            user_name: user.user_name,
            user_email: user.user_email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid data')
    }
});

/** login nad auth user
 *  POST api/user/login
 */
const loginUser = asyncHandler(async (req, res) => {

    const { user_email, user_password } = req.body;

    const user = await User.findOne({ user_email });

    if (user && (await bcrypt.compare(user_password, user.user_password))) {
        res.json({
            _id: user.id,
            user_name: user.user_name,
            user_email: user.user_email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid data')
    }
});

/** get user data
 * GET api/user/me 
 * private route
 */
const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'get my data' })
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
}
/** Get all craftsman, needs to be done
 * GET
 */
const getAllCraftsmans = asyncHandler(async (req, res) => {
    const craftsmans = await Craftsman.find();
    res.status(200).json(craftsmans)
});

module.exports = {
    addUser,
    loginUser,
    getMe,
    getAllCraftsmans,
};