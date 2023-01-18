const mongoose = require('mongoose');

const tmpReviewSchema = mongoose.Schema({
    revTxt: {
        type: String,
        required: [true, 'Please, enter review']
    },
    revCraftID: {
        type: mongoose.Types.ObjectId,
        ref: "Craftsman"
    },
}, {timestamps: true}
);

module.exports = mongoose.model('TmpReview', tmpReviewSchema); 