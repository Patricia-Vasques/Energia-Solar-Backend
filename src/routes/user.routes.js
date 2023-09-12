const { Router } = require ('express');

class UserRouter {
    routesFromUser () {
        const userRoutes = Router()
        userRoutes.post('/usuarios/login',loginUser)
        return userRoutes
    }
}

module.exports = new UserRouter()