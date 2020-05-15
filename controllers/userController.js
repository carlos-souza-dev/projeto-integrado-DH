const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");
const {Moradores} = require("../models");

const userController = {
    create: (req, res) => {
        return res.render("auth/register")
    },

    store: async (req, res) => {
        const {nome, cpf, email, senha} = req.body;
        const hashPassword = bcrypt.hashSync(senha, 10);

        const user = await Moradores.create(
            {nome, cpf, email, senha: hashPassword, foto: './img/user/fotoDefault.png'}
        )

        if (!user) {
            return res.render("auth/register", {msg: "Erro ao cadastrar um usuario"});
        }

        res.render("registro", {user});
    },
};

module.exports = userController;
