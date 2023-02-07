const asyncHandler = require('express-async-handler');
const TmpCraftsman = require('../models/tmpCraftsmanModel');
const TmpReview = require('../models/tmpReviewModel');
const User = require('../models/userModel');
const Craftsman = require('../models/craftsmanModel')

// POST api/tmp 
const addTmpCraftsman = asyncHandler(async (req, res) => {

    const { craftsman_name, craftsman_last_name, craftsman_professionion, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev } = req.body;

    //check if all fields ar ok
    if (!craftsman_name || !craftsman_last_name || !craftsman_professionion || !craftsman_city || !craftsman_phone) {
        res.status(400).json({message: 'Please, fill up the form'});
        throw new Error('Please, fill up the form')
    }

    //check if craftsman exists
    const craftsmanExists = await Craftsman.findOne({ craftsman_phone })
    const tmpCrafstmanExists = await TmpCraftsman.findOne({ craftsman_phone })
    if (craftsmanExists || tmpCrafstmanExists) {
        res.status(400).json({message: 'Craftsman with that phonenumber already exists'});
        throw new Error('Craftsman with that phonenumber already exists')
    }

    const user = await User.findById(req.user.id).select("-user_password");
    //create tmp craftsman
    const tmpCraftsman = await TmpCraftsman.create({
        craftsman_name: req.body.craftsman_name,
        craftsman_last_name: req.body.craftsman_last_name,
        craftsman_professionion: req.body.craftsman_professionion,
        craftsman_city: req.body.craftsman_city,
        craftsman_email: req.body.craftsman_email,
        craftsman_phone: req.body.craftsman_phone,
        craftsman_rev: [],
        user
    });

    if (tmpCraftsman) {
        res.status(201).json({
            _id: tmpCraftsman.id,
            craftsman_name: tmpCraftsman.craftsman_name,
            craftsman_last_name: tmpCraftsman.craftsman_last_name,
            craftsman_professionion: tmpCraftsman.craftsman_professionion,
            craftsman_city: tmpCraftsman.craftsman_city,
            craftsman_email: tmpCraftsman.craftsman_email,
            craftsman_phone: tmpCraftsman.craftsman_phone,
            craftsman_rev: tmpCraftsman.craftsman_rev,
            user: tmpCraftsman.user,
        })
    } else {
        res.status(400).json({message: 'Invalid data'});
        throw new Error('Invalid data')
    }
});

// POST api/tmp/:id
const addTmpReviw = asyncHandler(async (req, res) => {

    const { revTxt, revCraftID } = req.body;

    //add find craftsman by ID

    //check if all fields are filled
    if (!revTxt || !revCraftID) {
        res.status(400)
        throw new Error('All fields must bi filled');
    }

    const user = await User.findById(req.user.id);
    //add created by const {user_name, user_last_name} = user
    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    //create tmp rev
    const tmpReviw = await TmpReview.create({
        user,
        revTxt,
        revCraftID
    })

    if (tmpReviw) {
        res.status(201).json({
            _id: tmpReviw.id,
            user: tmpReviw.user,
            revTxt: tmpReviw.revTxt,
            revCraftID: tmpReviw.revCraftID
        })
    } else {
        res.status(400);
        throw new Error('Invalid data')
    }
});

module.exports = {
    addTmpCraftsman,
    addTmpReviw
}