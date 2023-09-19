const asyncHandler = require('express-async-handler');
const TmpCraftsman = require('../models/tmpCraftsmanModel') //source
const TmpReview = require('../models/tmpReviewModel')
const Craftsman = require('../models/craftsmanModel')
const User = require('../models/userModel') //source

/**GET TMP CRAFTSMEN***********
 * GET /api/admin/tmpcraftsmen*
 *****************************/
const getTmpCraftsman = asyncHandler(async (req, res) => {

    const craftsmen = await TmpCraftsman.find();
    res.status(200).json(craftsmen);

});

/**DELETE TMP CRAFTSMAN************* 
 * DELETE api/admin/tmpcraftsman/id*
 **********************************/
const deleteTmpCrafstman = asyncHandler(async (req, res) => {

    const craftsman = await TmpCraftsman.findById(req.params.id);

    if (!craftsman) {
        res.status(400)
        throw new Error('craftsman not found')
    };

    await craftsman.remove();

    res.status(200).json({ id: req.params.id });

});

/**MOVE TMP CRAFTSMAN TO PERMA*******
 * GET api/admin/tmpcraftsman/id*****
 * THIS NEEDS TO BE CHECKD IF EXISTS*
 ***********************************/
const addCraftsman = asyncHandler(async (req, res) => {

    const craftsman = await TmpCraftsman.findById(req.params.id);

    if (!craftsman) {
        res.status(400)
        throw new Error('craftsman not found')
    };

    const filter = { _id: craftsman._id };

    await TmpCraftsman.aggregate([
        { $match: filter },
        {
            $merge: {
                into: 'craftsmen',
                on: '_id',
                whenMatched: "replace"
            }
        },
    ]);

    await craftsman.remove();

    res.status(200).json({ id: req.params.id });
});

/** get all tmp revs********
 * GET api/admin/tmpreviews*
 **************************/

const getTmpRev = asyncHandler(async (req, res) => {
    const revs = await TmpReview.find();
    res.status(200).json(revs);
});

/** DELETE TMP REV FROM TMPREV COLLECTOIN */
const deleteTmpRev = asyncHandler(async (req, res) => {
    const rev = await TmpReview.findById(req.params.id);
    if (!rev) {
        res.status(400)
        throw new Error('rev not found')
    };
    await rev.remove();
    res.status(200).json({ id: req.params.id });
});

/**MOVE TMP REV TO ADECUATE CRAFTSMAN */
const addReview = asyncHandler(async (req, res) => {

    const rev = await TmpReview.findById(req.params.id);
    if (!rev) {
        res.status(400)
        throw new Error('rev not found')
    };

    const id = {_id: rev.revCraftID}
    const findCraftsman = await Craftsman.findById(id);
     
    if (!findCraftsman) {
        res.status(400);
        throw new Error('greška prilikom ažuriranja')
    }
    
    const newReview = {
        review: rev.revTxt,
        creator: rev.creator.user_name
    };

    await findCraftsman.craftsman_rev.push(newReview);
    await findCraftsman.save();
    res.status(200).json({ id: req.params.id });
    
});

//************************TO BE DONE********************************* */

const getAllUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/admin get All Users works' })
});

module.exports = {
    getAllUsers,
    getTmpCraftsman,
    getTmpRev,
    addCraftsman,
    addReview,
    deleteTmpCrafstman,
    deleteTmpRev
}