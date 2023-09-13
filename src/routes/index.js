const { Router } = require('express');
const { routesFromLaunch } = require('./lancamento.routes');
const { routesFromUser } = require('./user.routes')

const routes = Router()

routes.use('/api', [routesFromUser(), routesFromLaunch()]);

module.exports = routes;
