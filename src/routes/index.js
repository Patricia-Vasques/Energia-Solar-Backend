const { Router } = require('express');
const { routesFromRecord } = require('./lancamento.routes');
const { routesFromUser } = require('./user.routes')

const routes = Router()

routes.use('/api', [routesFromUser(), routesFromRecord()]);

module.exports = routes;