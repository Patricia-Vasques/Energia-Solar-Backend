const { createRecord } = require('../controllers/lancamento.controller');
const { Router } = require('express');

class RecordRouter {
  routesFromRecord() {
    const recordRoutes = Router();

    recordRoutes.post('/v1/geracao', createRecord);

    return recordRoutes;
  }
}

module.exports = new RecordRouter();
