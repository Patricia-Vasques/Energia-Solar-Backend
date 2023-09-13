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

            if(user.password !== password){
                return res.status(401).jso({error: "Senha incorreta!"})
            }
            else{
            //Retorna um Token para autenticação
            const payload = {"email": user.email, "senha":user.password}
            const token = sign (payload, process.env.SECRET_JWT)
            return res.status(200).json({ token });
            }

        } catch (error){
            return res.status(400).json({error: "Não foi possivel fazer o login!"})
    }
        }

        // Verificando usuarios existentes
        async listUser(req,res) {
            try{
           const {user} = req.params
           const users = await User.findAll(user)

           return res.status(200).json(users)
        } catch (error) {
        return res.status(400).json ({error: "Erro ao encontrar usuário!"})
        }
    }

    //Atualizar usuário no sistema
    async updateUser (req,res) {
        
            const { id } = req.params;
            const { name,
                    email, 
                    password} = req.body

                    try {
                        const user = await User.findByPk (id);
                        if(!user){
                            return res.status(400).json({error: "Id não encontrado ou algum dado está incorreto"})
                        }

                        user.name = name || user.name;
                        user.email = email || user.email;
                        user.password = password || user.password;

                        await user.save();
                        return res.status(200).json(user)
                    } catch (error){
                        console.error(error)
                        return res.status(500).json({error: "Não foi possível atualizar dados"})
                    }
        }
    }

module.exports = new UserController ()
