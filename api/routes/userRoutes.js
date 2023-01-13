const express = require('express');
const routerUser = express.Router();
const { getAllCraftsmans, addUser, addTmpCraftsman, addTmpReviw } = require('../controllers/userControllers');

routerUser.get('/', getAllCraftsmans);

routerUser.post('/', addUser);

routerUser.post('/', addTmpCraftsman);

routerUser.post('/', addTmpReviw);

/*
router.get('/', (req,res) => {
    res.status(200).json({message: '/api/user get works'})
})

router.get('/', (req,res) => {
    res.status(200).json({message: '/api/user get works'})
})
*/

module.exports = routerUser; 