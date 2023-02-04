const express = require('express');
const routerUser = express.Router();
const { getAllCraftsmans, addUser, login, getMe } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware')

routerUser.post('/', addUser);
routerUser.post('/login', login);
routerUser.get('/me', protect, getMe);
routerUser.get('/', getAllCraftsmans);

module.exports = routerUser; 