const Sequelize = require("sequelize");
const {Visitas} = require("../models");

const indexController = {
    schedule: async (req, res) => {
        const {
            name, 
            email, 
            phone,
            CEP, 
            logradouro,
            numero, 
            complemento, 
            bairro, 
            cidade, 
            estado, 
            condominio, 
            porte
        } = req.body;

        const resultado = await Visitas.create(
            {
            name, 
            email, 
            phone, 
            CEP, 
            logradouro, 
            numero, 
            complemento, 
            bairro, 
            cidade, 
            estado, 
            condominio, 
            porte
            }
        )

        return res.redirect("/");

    },

    contact: async (req, res) => {

    }
}

module.exports = indexController;