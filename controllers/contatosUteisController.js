const {ContatosUteis} = require("../models");
const Sequelize = require("sequelize");

const contatosUteisController = {

    exibir: async (req, res) => {
        console.log(ContatosUteis);
        let contato = await ContatosUteis.findAll();

        return res.render('contatosUteis', {contato});
    },

    store: async (req, res) => {

        const [files] = req.files;
        const {nome, descricao, numero, email} = req.body;
        

        const resultado = await ContatosUteis.create(
            {foto: `/img/${files.filename}`, nome, descricao, numero, email}
        );

        return res.redirect("/contatosUteis");

    },
    update: async (req, res) => {
        const {id} = req.params;
        const [files] = req.files;
        const {nome, descricao, numero, email} = req.body;

        if ([files] == "") {
            const contatos = await ContatosUteis.update({
                foto: `/img/${files.filename}`,
                nome,
                descricao,
                numero,
                email
            }, {
                where: {
                    id: id
                }
            })

        } else {
            const contatos = await ContatosUteis.update({
                
                foto: `/img/${files.filename}`,
                nome,
                descricao,
                numero,
                email
            }, {
                where: {
                    id: id
                }
            })
        }
        return res.redirect('/contatosUteis');

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