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

  async listRecordId (req, res) {
    try {
      const { id } = req.params
      const record = await Record.findOne({
        where: { id }})

        if(!record){
          return res.status(400).json({
            error: "Id não encontrado!"
          })
        }
      return res.status(200).json({
        messagem: "Id encontrado com sucesso!"
        })
      } catch (error) {
        return res.status(500).send({
          message: 'Erro no servidor.',
          cause: error.message
        })
      }
  }

  async deleteRecord (req, res){
    const  {id } = req.params
    const record = await Record.findOne({
      where: { id }
    })
    if(!record){
      return res.status(400).json({error: "id inválido!"})
    }
    await record.destroy({
      where: { id }
    })
    return res.status(204).json({
      messagem: "Deletado com sucesso!"
    })
  }
}
  

module.exports = new RecordController();
