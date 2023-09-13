const { registerRecord, listRecordId } = require('../controllers/lancamento.controller');
const { Router } = require('express');
const { auth } = require ('../middleware/auth')

class RecordRouter {
  routesFromRecord() {
    const recordRoutes = Router();

    recordRoutes.post('/v1/geracao', auth, registerRecord);
    recordRoutes.get('/v1/geracao/:unidadeId', auth, listRecordId )

    return recordRoutes;
  }
}

module.exports = new RecordRouter();
