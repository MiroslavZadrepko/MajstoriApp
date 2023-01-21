const mongoose = require('mongoose');

const tmpReviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    revTxt: {
        type: String,
        required: [true, 'Please, enter review']
    },
    revCraftID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Craftsman" //moguće da u Craftsmanu treba dodati ref PROVERITI
    },
}, {timestamps: true}
);

module.exports = mongoose.model('TmpReview', tmpReviewSchema); 