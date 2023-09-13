const { registerLaunch } = require('../controllers/lancamento.controller');
const { Router } = require('express');

class LaunchRouter {
  routesFromLaunch() {
    const launchRoutes = Router();

    launchRoutes.post('/v1/geracao', registerLaunch);

    return launchRoutes;
  }
}

module.exports = new LaunchRouter();
