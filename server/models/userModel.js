const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({

    name: String,
    surname: String,
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    company: String,
    password: String,
    userRole: String
})


const userModel = mongoose.model('User', userSchema)

module.exports = userModel;