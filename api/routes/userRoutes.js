const express = require('express');
const routerUser = express.Router();
const {
    getAllCraftsmans,
    addUser,
    addTmpCraftsman,
    addTmpReviw } = require('../controllers/userControllers');
 
routerUser.get('/', getAllCraftsmans);
routerUser.post('/', addUser);
routerUser.post('/', addTmpCraftsman);// tmpcraft
routerUser.post('/', addTmpReviw);// tmprev/:id majstora za kog se daje rew

module.exports = routerUser; 