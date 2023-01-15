const express = require('express');
const routerUser = express.Router();
const {
    getAllCraftsmans,
    addUser,
    addTmpCraftsman,
    addTmpReviw } = require('../controllers/userControllers');

routerUser.get('/', getAllCraftsmans);
routerUser.post('/', addUser);
routerUser.post('/', addTmpCraftsman);
routerUser.post('/', addTmpReviw);

module.exports = routerUser; 