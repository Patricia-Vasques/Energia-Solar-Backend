const { registerRecord } = require('../controllers/lancamento.controller');
const { Router } = require('express');

class RecordRouter {
  routesFromRecord() {
    const recordRoutes = Router();

    recordRoutes.post('/v1/geracao', registerRecord);

    return recordRoutes;
  }
}

module.exports = new RecordRouter();
