const Sequelize = require("sequelize");
const {Comunicados} = require("../models");

const comunicadosController = {
    create: (req, res) => {
        return res.render("criarComunicados")
    },
    store: async (req, res) => {
        const {titulo,informacao} = req.body;

        const conteudo = await Comunicados.create(
            {titulo, informacao}
        )
       
        // console.log(titulo, informacao)
        return res.redirect("/comunicados");


    },

    exibir: async (req, res) => {
        let comunicados = await Comunicados.findAll();
        
        return res.render('comunicados', {comunicados, usuario: req.session.user})
    }

};

module.exports = comunicadosController;
