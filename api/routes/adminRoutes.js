const express = require('express');
const routerAdmin = express.Router();
const {
    getAllUsers,
    getTmpCraftsman,
    getTmpRev,
    addCraftsman,
    addReview,
    deleteTmpCrafstman,
    deleteTmpRev } = require('../controllers/adminControllers')

/**need to put id, txt, etc for put and delete, and then routerAdmin.route() and combine to save lines of code */

const { protect } = require('../middleware/authMiddleware')

routerAdmin.get('/', getAllUsers);
routerAdmin.get('/tmpcraftsmen', getTmpCraftsman);
routerAdmin.get('/tmpreviews', getTmpRev);
routerAdmin.delete('/tmpcraftsmen/:id', addCraftsman);
routerAdmin.delete('/tmpreviews/:id', deleteTmpRev);
routerAdmin.post('/craftsmen/:id/review', addReview);
routerAdmin.delete('/tmpcraftsmen/:id', deleteTmpCrafstman);

module.exports = routerAdmin;