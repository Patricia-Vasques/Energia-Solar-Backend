const { Router } = require('express');
const {
  createRecord,
  listRecordId,
  getAllRecords,
  deleteRecord,
  updateRecord,
} = require('../controllers/lancamento.controller');
const { auth } = require('../middleware/auth');

class RecordRouter {
  routesFromRecord() {
    const recordRoutes = Router();

    recordRoutes.post('/v1/geracao', auth, createRecord);
    recordRoutes.get('/v1/geracao/:unidadeId', auth, listRecordId);
    recordRoutes.delete('/v1/geracao/:id', auth, deleteRecord);
    recordRoutes.get('/v1/geracao', auth, getAllRecords);
    recordRoutes.put('/v1/geracao/:id', auth, updateRecord);

    return recordRoutes;
  }
}

module.exports = new RecordRouter();
