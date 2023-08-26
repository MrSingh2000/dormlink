const mongoose = require('mongoose');
const { Schema } = mongoose;

// This is the user model to be used in server database as a collection
const userSchema = new Schema({
    rollNum: {
        type: Number,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
    },
    phoneNum: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }
});

// name of the collection is 'user'
module.exports = mongoose.model('user', userSchema);