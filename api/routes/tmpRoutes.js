const express = require('express');
const routerTmp = express.Router();
const { addTmpCraftsman, addTmpReviw } = require('../controllers/tmpControllers');
const {protect} = require('../middleware/authMiddleware')

routerTmp.post('/', protect, addTmpCraftsman);// tmpcraft
routerTmp.post('/', addTmpReviw);// tmprev/:id majstora za kog se daje rew

module.exports = routerTmp;