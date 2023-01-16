const asyncHandler = require('express-async-handler');
const Craftsman = require('../models/craftsmanModel')

const getAllCraftsmans = asyncHandler(async (req, res) => {

    const craftsmans = await Craftsman.find();

    res.status(200).json(craftsmans)
})

const addUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/user add User' })
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