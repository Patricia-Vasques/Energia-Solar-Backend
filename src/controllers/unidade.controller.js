const {Unidade} = require("../models/unidade")

class UnidadeController {
    async createOneUnidade(request, response){
        try {
            const {nickName, address, brand, model, active} = request.body
            
            if(!nickName || !address || !brand || !model || !active) {
                return response.status(400).send({ message: "É obrigatório Preencher todos os campos"})
            }
            
            const data = await Unidade.create({nickName, address, brand, model, active})
            
            return response.status(201).send(data)
        } catch (error) {
            return response.status(400).send(
                {
                    message: "Falha ao criar depósito",
                    cause: error.message
                }
            )
        }
    }

    async listarAllUnidades(request, response){
        try {
            const unidades = await Unidade.findAll()
            if (unidades.length === 0) {
                return response.status(404).send({
                    message: "Nenhuma unidade encontrada",
                });
            }

            return response.status(200).send(unidades)
	    } catch (error) {
	     	return response.status(401).send({
                message: "Falha al listar unidades",
                cause: error.message
            })
        }
    }

    async atualizarOneUnidade(request, response){
        try {
            const { id } = request.params
            const { nickName, address, brand, model, active } = request.body

            if(!nickName || !address || !brand || !model || !active) {
                return response.status(400).send({ message: "É obrigatório Preencher todos os campos"})
            }
	        
            if (isNaN(Number(id))) {
                return response.status(400).send({ message: "ID inválido, deve ser um número" });
            }
            
            const unidade = await Unidade.findByPk(id);
            if (!deposito) {
                return response.status(404).send({ message: "Depósito não encontrado" });
            }
	                    
            const dataForUpdate = Object.assign({}, nickName && {nickName}, address && {address }, brand && {brand}, model && {model}, active && {active})
             
            await Unidade.update(dataForUpdate, { where: { id }})
            
            return response.status(200).send({message: "Depósito alterado com sucesso"})
	    } catch (error) {
	     	return response.status(400).send({
                message: "Erro ao atualizar depósito",
                cause: error.message
            })
        }
    }

    async excluirUnidade(request, response) {
        try {
            const {id} = request.params;
            
            if (isNaN(Number(id))) {
                return response.status(400).send({ message: "ID inválido, deve ser um número" });
            }
            
            const unidade = await Unidade.findByPk(id);
            if (!unidade) {
                return response.status(404).send({ message: "Unidade não encontrada" });
            }
            
            if (unidade.active === 'true') {
                return response.status(400).json({ message: "A unidade não pode ser excluida, ainda está ativa" });
            }
      
            //await unidade.update({ active: 'false' });
            await unidade.destroy();
            
            return response.status(204).send({ message: "Unidade excluida" });
        } catch (error) {
            return response.status(404).json({
                message: "Falha ao excluir o depósito",
                cause: error.message,
            });
        }
    }

}

module.exports = new UnidadeController()