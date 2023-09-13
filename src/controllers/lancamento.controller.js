const { Record } = require('../models/lancamento');

class RecordController {
  async registerRecord(req, res) {
    try {
      const { idUnit, date, total } = req.body;

      if (!idUnit || !date || !total) {
        return res
          .status(400)
          .json({ error: 'Todos os campos devem ser preenchidos.' });
      }

      const datePattern = /^(0[1-9]|1[0-2])-\d{4}$/;
      if (!datePattern.test(date)) {
        return res
          .status(400)
          .json({ error: 'Formato de data inválido. Use MM-YYYY.' });
      }

      const newRecord = await Record.create({
        idUnit,
        date,
        total,
      });

      return res.status(201).json({
        message: 'Lançamento cadastrado com sucesso!',
        newRecord,
      });
    } catch (error) {
      return res.status(500).send({
        message: 'Erro no servidor.',
        cause: error.message,
      });
    }
  }

  async getAllRecords(req, res) {
    try {
      const records = await Record.findAll();
      if (records.length === 0) {
        return res.status(404).json({
          message: 'Não há lançamentos cadastrados até o momento.',
        });
      }

      return res.status(200).json(records);
    } catch (error) {
      return res.status(500).send({
        message: 'Erro no servidor.',
        cause: error.message,
      });
    }
  }
}

module.exports = new RecordController();
