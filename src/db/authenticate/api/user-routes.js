const express = require('express');
const userRouter = express.Router();

const {authMiddleware} = require("../../../utils")

const {createUser,getSingleUser,login} = require("./../user")

userRouter.post("/", createUser)

userRouter.get("/me", authMiddleware, getSingleUser)

userRouter.post("/login", login)

module.exports = userRoutes