const getAllCraftsmans = (req,res) => {
    res.status(200).json({message: '/api/user get All Craftsmans works'})
};

const addUser = (req, res) => {
    res.status(200).json({message: '/api/user add User'})
};

const addTmpCraftsman = (req,res) => {
    res.status(200).json({message: '/api/user add Tmp Craftsman works'})
};

const addTmpReviw = (req,res) => {
    res.status(200).json({message: '/api/user add Tmp Review works'})
} 

module.exports = {
    getAllCraftsmans,
    addUser,
    addTmpCraftsman,
    addTmpReviw
};