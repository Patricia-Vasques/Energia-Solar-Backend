const { Router } = require('express')
const { routesFronUser} = require('./user.routes')

const routes = new Router()
routes.use('/api', [
    userRoutes.post('/usuarios/login',loginUser),
])

module.exports = routes