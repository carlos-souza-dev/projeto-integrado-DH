const {ContatosUteis} = require("../models");
const Sequelize = require("sequelize");

const contatosUteisController = {

    exibir: async (req, res) => {
        console.log(ContatosUteis);
        let docs = await ContatosUteis.findAll();

        return res.render('contatosUteis', {docs});
    },

    store: async (req, res) => {

        const {foto, nome, descricao, numero, email} = req.body;
        const [files] = req.files;

        const resultado = await ContatosUteis.create(
            {foto,nome, descricao, numero, email: `/docs/${files.filename}`}
        );

        return res.redirect("/contatosUteis");

    },

    destroy: async (req, res) => {
        const {id} = req.params;
        const resultado = await ContatosUteis.destroy({
            where: {
                id: id
            }
        })
       
        res.redirect('/contatosUteis')
    }
}

module.exports = contatosUteisController;