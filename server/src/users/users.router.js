const express = require('express');
const { getUsers, createUser, loginUser, logOutUser } = require('./users.controller')
const { hashPass, unhashPass } = require('../middlewares')

const userRouter = express.Router()
.get('/users', getUsers)
.post('/users/sign-up', hashPass, createUser)
.post('/users/login', unhashPass, loginUser)
.post('/users/logout', logOutUser)

module.exports = { userRouter }