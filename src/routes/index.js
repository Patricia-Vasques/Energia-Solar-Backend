const { Router } = require('express');
const { routesFromLaunch } = require('./lancamento.routes');

const routes = Router();

routes.use('/api', [routesFromLaunch()]);

module.exports = routes;
