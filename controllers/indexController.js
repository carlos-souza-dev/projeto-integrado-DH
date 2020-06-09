const Sequelize = require("sequelize");
const {Demonstrations} = require("../models");

const demonstrationController = {
    schedule: async (req, res) => {
        const [files] = req.files;
        const {nome, dataNascimento, rg, cpf} = req.body;

        const resultado = await Moradores.create(
            {nome, dataNascimento, rg, cpf, foto: `/img/${files.filename}`}
        )

        return res.redirect("/moradores");

    },

    contact: async (req, res) => {
        
    }
}