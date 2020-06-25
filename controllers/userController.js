const Sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");
const {Moradores} = require("../models");

const userController = {
    create: (req, res) => {
        return res.render("auth/register", {msgCPF: ""})
    },

    store: async (req, res) => {
     
        
       
        const {nome, cpf, email, senha, admin = 0, dataNascimento, id_apartamento} = req.body;
        const hashPassword = bcrypt.hashSync(senha, 10);
        const db = new Sequelize(config);
       
        // Busca na base de moradores os registros com o mesmo CPF digitado no cadastro

        const [cpfValidacao] = await db.query (
            "SELECT * FROM moradores where cpf = :cpf limit 1",
            {
                replacements: {cpf: cpf},
                type: QueryTypes.SELECT
            }
        )

        // Cadastra o novo usuário na base caso não encontre o CPF informado
        if(!cpfValidacao) {
            const user = await Moradores.create({
                nome,
                cpf, 
                email, 
                senha: hashPassword, 
                foto: './img/user/fotoDefault.png',
                admin,
                dataNascimento,
                id_apartamento,
                
        }) 
        console.log(hashPassword)

        } else {
             return res.render("auth/register", {msgCPF: "Erro ao cadastrar usuário. O CPF informado já está sendo utilizado."});
        }

        res.render("login", {msg: "", usuario: req.session.user});
    },

  }; 

module.exports = userController;
