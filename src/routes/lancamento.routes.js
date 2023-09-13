const {
  registerRecord,
  getAllRecords,
} = require('../controllers/lancamento.controller');
const { Router } = require('express');

class RecordRouter {
  routesFromRecord() {
    const recordRoutes = Router();

    //   GET - /api/v1/geracao : Esta é a rota para a visualização de registros de geração cadastradas no sistema, e ela deve às retornar no corpo da resposta
    // Respostas:
    // 200 - Caso a requisição seja bem sucedida
    recordRoutes.post('/v1/geracao', registerRecord);
    recordRoutes.get('/v1/geracao', getAllRecords);

    return recordRoutes;
  }
}

module.exports = new RecordRouter();
