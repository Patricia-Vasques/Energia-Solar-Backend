const { User } = require ('../models/user')
const { sign } = require('jsonwebtoken')

class UserController {

    //Criando novo usuário
    async createOneUser(req,res){

        const{
            name,
            email,
            password
        } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({error: "Preencha os campos obrigatórios!"})
        }

        const emailExistente = await User.findOne({ where: {email}})
        if(emailExistente) {
            return res.status(403).json({error: "E-mail já cadastrado ou formato de e-mail inválido"})
        }

        const newUser = await User.create({
            name,
            email,
            password
        })

        return res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
    }

    //Login 
    async loginUser(req, res){
        try{
            const {email, password} =  req.body;

            const user = await User.findOne({ where: { email}});
            if(!user) {
                return res.status(404).json({error: "E-mail não cadastrado!"});
            }
            else{
            //Retorna um Token para autenticação
            const payload = {"email": user.email, "senha":user.password}
            const token = sign (payload, process.env.SECRET_JWT)
            return res.status(200).json({ token });
            }

        } catch (error){
            return res.status(401).json({error: "Senha incorreta!"})
    }
        }
    }
    
module.exports = new UserController ()
