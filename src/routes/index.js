const { Router } = require('express');
const { routesFromRecord } = require('./lancamento.routes');
const { routesFromUser } = require('./user.routes');
const { routesFromUnidade } = require('./unidade.routes');

const routes = Router();

routes.use('/api', [routesFromUser(), routesFromRecord(), routesFromUnidade()]);

module.exports = routes;
