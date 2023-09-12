const { User } = require ('../models/user')
const { sign } = require('jsonwebtoken')

class UserController {

    //Login 
    async loginUer(req, res){
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
