const { Record } = require('../models/lancamento');
const { Unidade } = require('../models/unidade');

class RecordController {
  async createRecord(req, res) {
    try {
      const { idUnit, date, total } = req.body;

      if (!idUnit || !date || !total) {
        return res
          .status(400)
          .json({ error: 'Todos os campos devem ser preenchidos.' });
      }

      const unitExisting = await Unidade.findOne({ where: { id: idUnit } });
      if (!unitExisting) {
        return res.status(400).json({
          message: `A unidade de Id ${idUnit} não existe.`,
        });
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

  async listRecordId(req, res) {
    try {
      const { id } = req.params;
      const record = await Record.findOne({
        where: { id },
      });

      if (!record) {
        return res.status(400).json({
          error: 'Id não encontrado!',
        });
      }
      return res.status(200).json({
        messagem: 'Id encontrado com sucesso!',
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

  async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      const record = await Record.findOne({
        where: { id },
      });
      if (!record) {
        return res.status(400).json({ error: 'id inválido!' });
      }
      await record.destroy({
        where: { id },
      });
      return res.status(204).json({
        messagem: 'Deletado com sucesso!',
      });
    } catch (error) {
      return res.status(500).send({
        message: 'Erro no servidor.',
        cause: error.message,
      });
    }
  }

  async updateRecord(req, res) {
    try {
      const { id } = req.params;
      const { date, total } = req.body;

      if (!date && !total) {
        return res.status(400).json({
          message: 'Todos os campos devem ser preenchidos.',
        });
      }

      if (!id || isNaN(id) || parseInt(id) <= 0) {
        return res.status(400).json({ error: 'ID inválido.' });
      }

      const recordExisting = await Record.findByPk(id);
      if (!recordExisting) {
        return res.status(404).json({
          message: 'Registro não encontrado.',
        });
      }

      recordExisting.date = date;
      recordExisting.total = total;

      await recordExisting.save();

      return res.status(200).json({
        message: 'Registro atualizado com sucesso!',
        recordExisting,
      });
    } catch (error) {
      return res.status(500).send({
        message: 'Erro no servidor.',
        cause: error.message,
      });
    }
  }
}

module.exports = new RecordController();
