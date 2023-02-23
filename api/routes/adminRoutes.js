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

const { protect } = require('../middleware/authMiddleware')

routerAdmin.get('/', getAllUsers);
routerAdmin.get('/tmpcraftsmen', getTmpCraftsman);
routerAdmin.get('/', getTmpReview);
routerAdmin.get('/tmpcraftsmen/:id', addCraftsman);
routerAdmin.put('/', addReview);
routerAdmin.delete('/tmpcraftsmen/:id', deleteTmpCrafstman);
routerAdmin.delete('/', deleteTmpReview);

module.exports = routerAdmin;