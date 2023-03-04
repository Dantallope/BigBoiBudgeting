const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema({
    id: Schema.Types.ObjectId,
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

    budget: {
        type: Number,
        required: true,
    }

})

const User = model('User', userSchema);

module.exports = User