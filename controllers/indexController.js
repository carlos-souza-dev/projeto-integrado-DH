const Sequelize = require("sequelize");
const {Visitas, Newsletter} = require("../models");

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

    subscribe: async (req, res) => {
        
        const {emailNews} = req.body

           
        const resultado = await Newsletter.create({email: emailNews});

        return res.render('index', {emailSub: emailNews})
    }
}

module.exports = indexController;