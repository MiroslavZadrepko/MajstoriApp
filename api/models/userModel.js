const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: [true, 'Please add name']
    }, 
    user_email: {
        type: String,
        required: [true, 'Please add e-mailname']
    },
    user_password: {
        type: String,
        required: [true, 'Please add password']
    }, 
    admin: {
        type: Boolean,
        default: false 
    } 
},
{timestamps: true}
);

module.exports = mongoose.model('User', userSchema);