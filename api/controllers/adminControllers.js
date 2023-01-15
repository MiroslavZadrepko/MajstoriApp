const getAllUsers = (req, res) => {
    res.status(200).json({ message: '/api/admin get All Users works' })
};

const getTmpCraftsman = (req, res) => {
    res.status(200).json({ message: '/api/admin get Tmp Craftsman works' })
};

const getTmpReview = (req, res) => {
    res.status(200).json({ message: '/api/admin get Tmp Review works' })
};

const addCraftsman = (req, res) => {
    res.status(200).json({ message: '/api/admin add Craftsman works' })
};

const addReview = (req, rev) => {
    res.status(200).json({ message: '/api/admin add Review works' })
};

const deleteTmpCrafstman = (req, res) => {
    res.status(200).json({ message: '/api/admin delete Tmp Crafstman works' })
}

const deleteTmpReview = (req, res) => {
    res.status(200).json({ message: '/api/admin delete Tmp Review works' })
}
module.exports = {
    getAllUsers,
    getTmpCraftsman,
    getTmpReview,
    addCraftsman,
    addReview,
    deleteTmpCrafstman,
    deleteTmpReview
}