const {Documentacoes} = require("../models");
const Sequelize = require("sequelize");

const documentacaoController = {

    exibir: async (req, res) => {
        console.log(Documentacoes);
        let docs = await Documentacoes.findAll();

        return res.render('documentacao', {docs});
    },

    store: async (req, res) => {

        const {nomeDoc, descricao} = req.body;
        const [files] = req.files;

        const resultado = await Documentacoes.create(
            {nomeDoc, descricao, documento: `/docs/${files.filename}`}
        );

        return res.redirect("/documentacao");

    },

    destroy: async (req, res) => {
        const {id} = req.params;
        const resultado = await Documentacoes.destroy({
            where: {
                id: id
            }
        })
       
        res.redirect('/documentacao')
    }
}

module.exports = documentacaoController;