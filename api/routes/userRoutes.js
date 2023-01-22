const express = require('express');
const routerUser = express.Router();
const {
    getAllCraftsmans,
    addUser,
    addTmpCraftsman,
    addTmpReviw, 
    loginUser,
    getMe} = require('../controllers/userControllers');
const {protect} = require('../middleware/authMiddleware')

routerUser.post('/', addUser); 
routerUser.post('/login', loginUser);
routerUser.get('/me', protect, getMe);
routerUser.get('/', getAllCraftsmans);
routerUser.post('/', addTmpCraftsman);// tmpcraft
routerUser.post('/', addTmpReviw);// tmprev/:id majstora za kog se daje rew

module.exports = routerUser; 