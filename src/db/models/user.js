const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: String,
    email: {
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    },
    password: {
        type: String,
        required: true
    },

    budget: Number,

})

const User = mongoose.model('User', userSchema);

module.exports = User