const { Router } = require('express');
const { loginUser, createOneUser, listUser, updateUser, deleteUser } = require('../controllers/user.controllers');
const { auth } = require ('../middleware/auth')


class UserRouter {
  routesFromUser() {
    const userRoutes = Router();

    userRoutes.post('/v1/login', loginUser);
    userRoutes.post('/v1/usuario', createOneUser);
    userRoutes.get('/v1/usuario', auth, listUser);
    userRoutes.put('/v1/usuario/:id', auth, updateUser);
    userRoutes.delete('/v1/usuario/:id', auth, deleteUser)

    return userRoutes;
  }
}

module.exports = new UserRouter();
