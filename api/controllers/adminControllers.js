const asyncHandler = require('express-async-handler');
const TmpCraftsman = require('../models/tmpCraftsmanModel') //source
const Craftsman = require('../models/craftsmanModel')

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

    const craftsman = await TmpCraftsman.findByIdAndDelete(req.params.id);

    if (!craftsman) {
        res.status(400)
        throw new Error('craftsman not found')
    };

    // const destInstance = new Craftsman(craftsman);
    // await destInstance.save();
    // if up goes, next part is out

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

    /**
     // Assume the following document exists in the source collection
{
  "_id": ObjectId("1234567890"),
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com"
}

// Cut and paste the document from the source to the destination model
const SourceModel = mongoose.model("SourceModel", sourceSchema);
const DestinationModel = mongoose.model("DestinationModel", destinationSchema);

try {
  const document = await SourceModel.findOneAndDelete({ "_id": ObjectId("1234567890") });
  const destinationInstance = new DestinationModel(document);
  await destinationInstance.save();
} catch (err) {
  console.error(err);
}

     */

    res.status(200).json({ id: req.params.id });

})



const getTmpReview = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/admin get Tmp Review works' })
})

const addReview = asyncHandler(async (req, rev) => {
    res.status(200).json({ message: '/api/admin add Review works' })
})

const deleteTmpReview = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/admin delete Tmp Review works' })
})

const getAllUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/admin get All Users works' })
});

module.exports = {
    getAllUsers,
    getTmpCraftsman,
    getTmpReview,
    addCraftsman,
    addReview,
    deleteTmpCrafstman,
    deleteTmpReview
}