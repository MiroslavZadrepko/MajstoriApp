const asyncHandler = require('express-async-handler');
const {Craftsman} = require('../models/craftsmanModel')
const {User} = require('../models/userModel')

const getAllCraftsmans = asyncHandler(async (req, res) => {
    const craftsmans = await Craftsman.find();
    res.status(200).json(craftsmans)
})

const addUser = asyncHandler(async (req, res) => {

    const { user_name, user_email, user_password} = req.body;

    try {
        const user = await User.create({ user_name, user_email, user_password});
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

const addTmpCraftsman = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/user add Tmp Craftsman works' })
});

const addTmpReviw = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/user add Tmp Review works' })
});

module.exports = {
    getAllCraftsmans,
    addUser,
    addTmpCraftsman,
    addTmpReviw
};