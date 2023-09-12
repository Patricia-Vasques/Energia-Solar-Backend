const { Router } = require('express');
const { loginUser, createOneUser } = require('../controllers/user.controllers');

class UserRouter {
  routesFromUser() {
    const userRoutes = Router();

    userRoutes.post('/v1/login', loginUser);
    userRoutes.post('/v1/usuario', createOneUser);

    return userRoutes;
  }
}

module.exports = new UserRouter();
