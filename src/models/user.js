const { INTEGER, STRING, DATE, ENUM } = require ('sequelize')
const { connection } = require('../database/connection')

const User = connection.define("user", {
    id: {
        type: INTEGER,
        primarykey: true,
        allowNull: false,
        autoIncrement: true,
        },

    name: {
        type: STRING,
        allowNull: false,
        },
    
    email: {
        type: STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
        unic: true, 

    password:{
        type: STRING,
        allowNull: false,
        validate: {
            len: {args: [8, 15], msg: "Senha precisa ter entre 8 a 15 char."},
            strongPassword(value) {
                const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]+$/;;
                if (!strongPasswordRegex.test(value)) {
                    throw new Error(
                    'Senha deve conter pelo menos 1 letra maiúscula, 1 número e 1 caracteres.'
                    );
                }
            }
        },
    }
},

{  underscored: true, paranoide: true })

module.exports = { User }