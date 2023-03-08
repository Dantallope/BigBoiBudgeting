const jwt = require("jsonwebtoken")
require("dotenv").config()

const secret = process.env.JWT_SECRET
const expiration = process.env.JWT_EXPIRATION

function signToken({ _id, username, email }) {
	const payload = { _id, username, email }
	return jwt.sign({ data: payload }, secret, { expiresIn: expiration },
	)
}

module.exports = {
	signToken,
}