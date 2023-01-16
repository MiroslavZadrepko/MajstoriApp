const mongoose = require('mongoose');

const craftsmanSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add crfatsmans name']
    },
    last_name: {
        type: String,
        required: [true, 'Please add crfatsmans last name']
    },
    profession: {
        type: String,
        required: [true, 'Please add crfatsmans profession']
    },
    city: {
        type: String,
        required: [true, 'Please add crfatsmans city']
    },
    email: {
        type: String, /**e-mail */
    },
    phone: {
        type: Number,
        required: [true, 'Please add crfatsmans phonenumber']
    },
    review: {
        type: String, /**array of revs */
    }
})

module.exports = mongoose.model('Craftsman', craftsmanSchema);