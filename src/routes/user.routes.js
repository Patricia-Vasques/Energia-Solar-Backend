const { Router } = require('express');
const { loginUser, createOneUser, listUser } = require('../controllers/user.controllers');

class UserRouter {
  routesFromUser() {
    const userRoutes = Router();

    userRoutes.post('/v1/login', loginUser);
    userRoutes.post('/v1/usuario', createOneUser);
    userRoutes.get('/v1/usuario', listUser)

    return userRoutes;
  }
}

module.exports = new UserRouter();
