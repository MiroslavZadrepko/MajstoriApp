const express = require('express');
const routerTmp = express.Router();
const { addTmpCraftsman, addTmpReviw } = require('../controllers/tmpControllers');
const {protect} = require('../middleware/authMiddleware')

routerTmp.post('/', protect, addTmpCraftsman);// tmp
routerTmp.post('/:id', protect, addTmpReviw);// tmp/:id majstora za kog se daje rew

module.exports = routerTmp;