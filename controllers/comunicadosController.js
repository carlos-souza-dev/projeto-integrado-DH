const Sequelize = require("sequelize");
const config = require("../config/database");
const {Comunicado} = require("../models");

const comunicadosController = {
    index: (req, res) => {
        return res.render("auth/criarComunicados")
    },
    store: async (req, res) => {
        const {titulo,texto} = req.body;

        const user = await Moradores.create(
            {texto, titulo, data: newDate}
        )

        if (!user) {
            return res.render("auth/register", {msg: "Erro ao cadastrar um usuario"});
        }

        return res.redirect("/login");
    }

};

module.exports = comunicadosController;
