const express = require('express');
const routerUser = express.Router();
const { getCraftsmen, addUser, login, getMe } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware')

routerUser.post('/', addUser);
routerUser.post('/login', login);
routerUser.get('/me', protect, getMe);
routerUser.get('/craftsmen', getCraftsmen);

module.exports = routerUser; 