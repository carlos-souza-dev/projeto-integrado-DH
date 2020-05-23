const Sequelize = require("sequelize");
const {Correspondencias} = require("../models");

const correspondenciaController = {
    create: (req, res) => {
        return res.render("correspondencias")
    },
    store: async (req, res) => {
        const {tipo,destinatario,apartamento} = req.body;

        const correspondencia = await Correspondencias.create(
            {tipo,destinatario,apartamento}
        )
       
        // console.log(titulo, informacao)
        return res.redirect("/correspondencias");

    },

    exibir: async (req, res) => {
        let correspondencia = await Correspondencias.findAll();
        
        return res.render('correspondencias', {correspondencia})
    }

};

module.exports = correspondenciaController;
