const express = require('express');
const { getUsers, createUser, loginUser, logOutUser, checkLoginStatus } = require('./users.controller')
const { hashPass, unhashPass, checkAvailability } = require('../middlewares')

const userRouter = express.Router()
.get('/users', getUsers)
.post('/users/sign-up', checkAvailability, hashPass, createUser)
.post('/users/login', unhashPass, loginUser)
.post('/users/logout', logOutUser)
.get('/users/authorize', checkLoginStatus)

module.exports = { userRouter }