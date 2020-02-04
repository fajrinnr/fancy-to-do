const IndexRoute = require('express').Router()
const TaskRoute = require('./taskRoute')
const UserRoute = require('./userRoute')
const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')

IndexRoute.post('/login', UserController.login)
IndexRoute.use(authentication)
IndexRoute.use('/todos', TaskRoute)
IndexRoute.use('/user', UserRoute)

module.exports = IndexRoute