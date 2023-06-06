const express = require('express');
const routerTmp = express.Router();
const { addTmpCraftsman, addTmpReviw } = require('../controllers/tmpControllers');
const {protect} = require('../middleware/authMiddleware')

routerTmp.post('/tmpcraftsmen/', protect, addTmpCraftsman);// tmp
routerTmp.post('/tmpreviews/', protect, addTmpReviw);// tmp

module.exports = routerTmp;