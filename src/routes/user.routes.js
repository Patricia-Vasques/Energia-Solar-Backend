const { Router } = require ('express');

class UserRouter {
    routesFromUser () {
        const userRoutes = Router()

        return userRoutes
    }
}

module.exports = new UserRouter()