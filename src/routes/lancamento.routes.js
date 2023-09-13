
const { registerRecord, listRecordId, deleteRecord} = require('../controllers/lancamento.controller');



const {
  registerRecord,
  getAllRecords,
} = require('../controllers/lancamento.controller');

>>>>>>> 3271ebbe0ced31a6680ba2d530f08ea83dcbceb6
const { Router } = require('express');
const { auth } = require ('../middleware/auth')

class RecordRouter {
  routesFromRecord() {
    const recordRoutes = Router();


    recordRoutes.post('/v1/geracao', auth, registerRecord);
    recordRoutes.get('/v1/geracao/:unidadeId', auth, listRecordId);
    recordRoutes.delete('/v1/geracao/:id', auth, deleteRecord)

    //   GET - /api/v1/geracao : Esta é a rota para a visualização de registros de geração cadastradas no sistema, e ela deve às retornar no corpo da resposta
    // Respostas:
    // 200 - Caso a requisição seja bem sucedida
    recordRoutes.post('/v1/geracao', registerRecord);
    recordRoutes.get('/v1/geracao', getAllRecords);


    return recordRoutes;
  }
}

module.exports = new RecordRouter();
