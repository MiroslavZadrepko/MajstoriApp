const mongoose = require('mongoose');

const craftsmanSchema = mongoose.Schema({
    
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
        type: []
    }
}, {timestamps: true},

);

module.exports = mongoose.model('Craftsman', craftsmanSchema);