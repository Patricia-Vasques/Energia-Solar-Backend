const { Router } = require('express')
const { routesFromUser } = require('./user.routes')

const routes = Router()

routes.use('/api', [
    routesFromUser()
])



module.exports = routes