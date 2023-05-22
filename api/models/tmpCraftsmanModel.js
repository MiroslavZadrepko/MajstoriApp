const mongoose = require('mongoose');

const tmpCraftsmanSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    craftsman_name: {
        type: String,
        required: [true, 'Please add crfatsmans name']
    },
    craftsman_last_name: {
        type: String,
        required: [true, 'Please add crfatsmans last name']
    },
    craftsman_professionion: {
        type: String,
        required: [true, 'Please add crfatsmans profession']
    },
    craftsman_city: {
        type: String,
        required: [true, 'Please add crfatsmans city']
    },
   
    craftsman_phone: {
        type: Number,
        required: [true, 'Please add crfatsmans phonenumber']
    },
    craftsman_rev: {
        type: [String]
    }
}, { timestamps: true }
);

tmpCraftsmanSchema.pre('findOne', function(next) {
    this.populate({
        path: 'user', 
        select: 'user_name user_email'
    });
    next();
});
 
module.exports = mongoose.model('TmpCraftsman', tmpCraftsmanSchema);