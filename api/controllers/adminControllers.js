const asyncHandler = require('express-async-handler');
const Craftsman = require('../models/tmpCraftsmanModel')


const getAllUsers = asyncHandler(async (req, res) => {    
    res.status(200).json({ message: '/api/admin get All Users works' })
})
/**GET TMP CRAFTSMEN
 * GET /api/admin/tmpcraftsmen
 */
const getTmpCraftsman = asyncHandler(async (req, res) => {
    const craftsmen = await Craftsman.find();
    
    res.status(200).json(craftsmen)
   
})

/**DELETE TMP CRAFTSMAN 
 * DELETE api/admin/tmpcraftsman/id
 */

const deleteTmpCrafstman = asyncHandler(async(req, res) => {
    
    const craftsman = await Craftsman.findById(req.params.id)

    console.log(craftsman);
    if (!craftsman) {
      res.status(400)
      throw new Error('Goal not found')
    }
  
    await craftsman.remove();
  
    res.status(200).json({ id: req.params.id })

})

const getTmpReview = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/admin get Tmp Review works' })
})

const addCraftsman = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/admin add Craftsman works' })
})

const addReview = asyncHandler(async (req, rev) => {
    res.status(200).json({ message: '/api/admin add Review works' })
})

const deleteTmpReview = asyncHandler(async (req, res) => {
    res.status(200).json({ message: '/api/admin delete Tmp Review works' })
})

module.exports = {
    getAllUsers,
    getTmpCraftsman,
    getTmpReview,
    addCraftsman,
    addReview,
    deleteTmpCrafstman,
    deleteTmpReview
}