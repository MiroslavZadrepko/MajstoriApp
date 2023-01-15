const express = require('express');
const routerAdmin = express.Router();
const {
    getAllUsers,
    getTmpCraftsman,
    getTmpReview,
    addCraftsman,
    addReview,
    deleteTmpCrafstman,
    deleteTmpReview } = require('../controllers/adminControllers')

/**need to put id, txt, etc for put and delete, and then routerAdmin.route() and combine to save lines of code */

routerAdmin.get('/', getAllUsers);
routerAdmin.get('/', getTmpCraftsman);
routerAdmin.get('/', getTmpReview);
routerAdmin.put('/', addCraftsman);
routerAdmin.put('/', addReview);
routerAdmin.delete('/', deleteTmpCrafstman);
routerAdmin.delete('/', deleteTmpReview);

module.exports = routerAdmin;