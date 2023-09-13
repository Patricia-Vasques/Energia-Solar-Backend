const {
  registerRecord,
  getAllRecords,
  updateRecord,
} = require('../controllers/lancamento.controller');
const { Router } = require('express');

class RecordRouter {
  routesFromRecord() {
    const recordRoutes = Router();

    recordRoutes.post('/v1/geracao', registerRecord);
    recordRoutes.get('/v1/geracao', getAllRecords);
    recordRoutes.put('/v1/geracao/:id', updateRecord);

    return recordRoutes;
  }
}

module.exports = new RecordRouter();
