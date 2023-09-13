const { registerRecord, listRecordId, deleteRecord} = require('../controllers/lancamento.controller');
const { Router } = require('express');
const { auth } = require ('../middleware/auth')

class RecordRouter {
  routesFromRecord() {
    const recordRoutes = Router();

    recordRoutes.post('/v1/geracao', auth, registerRecord);
    recordRoutes.get('/v1/geracao/:unidadeId', auth, listRecordId);
    recordRoutes.delete('/v1/geracao/:id', auth, deleteRecord)

    return recordRoutes;
  }
}

module.exports = new RecordRouter();
