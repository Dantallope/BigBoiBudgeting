const { Schema, model, Types } = require('mongoose')
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: {
			type: String,
			required: true,
			unique: true,
		},
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

});

userSchema.methods.validatePassword = async function (password) {
	return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User