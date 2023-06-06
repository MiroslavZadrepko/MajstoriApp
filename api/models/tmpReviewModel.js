const mongoose = require('mongoose');

const tmpReviewSchema = mongoose.Schema({
    creator: {
        user_name: {
            type: String,
            required: true,
            
        },
        user_email: {
            type: String,
            required: true,
            
        },
        id: {
            type: String,
            required: true,
            
        }
    },
    revTxt: {
        type: String,
        required: [true, 'Please, enter review']
    },
    revCraftID: {
        type: String
        
    },
}, { timestamps: true }
);

module.exports = mongoose.model('TmpReview', tmpReviewSchema); 