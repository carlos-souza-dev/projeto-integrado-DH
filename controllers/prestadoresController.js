const Sequelize = require("sequelize");
const config = require("../config/database");
const {Prestadores} = require("../models");

const prestadoresController = {

    store: async (req, res) => {
        const [files] = req.files;
        const {nome, rg, cpf, categoria} = req.body;

        const conteudo = await Prestadores.create(
            {nome, rg, cpf, categoria, foto: `/img/${files.filename}`}
        )

        return res.redirect("/prestadoresDeServico");

    },

    exibir: async (req, res) => {

        const prestadores = await Prestadores.findAll()
        return res.render('prestadoresDeServico', {prestadores});
    },

    update: async (req, res) => {
        const {id} = req.params;
        const [files] = req.files;
        const {nome, rg, cpf, categoria} = req.body;

        if ([files] == "") {
            const prestador = await Prestadores.update({
                nome,
                rg,
                cpf,
                categoria
            }, {
                where: {
                    id: id
                }
            })

        } else {
            const prestador = await Prestadores.update({
                nome,
                rg,
                cpf,
                categoria,
                foto: `/img/${files.filename}`
            }, {
                where: {
                    id: id
                }
            })
        }
        return res.redirect('/prestadoresDeServico');

    },

    destroy: async (req, res) => {
        const {id} = req.params;
        const resultado = await Prestadores.destroy({
            where: {
                id: id
            }
        })

        res.redirect('/prestadoresDeServico')
    }

}

module.exports = prestadoresController;
