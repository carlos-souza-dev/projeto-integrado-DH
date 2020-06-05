const {ContatosUteis} = require("../models");
const Sequelize = require("sequelize");

const contatosUteisController = {

    
    store: async (req, res) => {

        const [files] = req.files;
        const {nome, descricao, numero, email} = req.body;
        

        const resultado = await ContatosUteis.create(
            {foto: `/img/${files.filename}`, nome, descricao, numero, email}
        );

        return res.redirect("/contatosUteis");

    },

    exibir: async (req, res) => {
        
        const contato = await ContatosUteis.findAll();
        return res.render('contatosUteis', {contato, usuario: req.session.user});
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