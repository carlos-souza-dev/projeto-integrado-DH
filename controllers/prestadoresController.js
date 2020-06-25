const Sequelize = require("sequelize");
const config = require("../config/database");
const {Prestadores} = require("../models");

const prestadoresController = {

    store: async (req, res) => {
        const [files] = req.files;
        const {nome, rg, inputcpf, categoria} = req.body;
        let cpf = inputcpf.replace(/[^\d]+/g,"")

        console.log (cpf)
        const conteudo = await Prestadores.create(
            {nome, rg, cpf, categoria, foto: `/img/${files.filename}`, id_apartamento: req.session.user.id_apartamento}
        )

        return res.redirect("/prestadoresDeServico");

    },

    exibir: async (req, res) => {

        if (req.session.user.admin) {
            const prestadores = await Prestadores.findAll()

            return res.render('prestadoresDeServico', {prestadores, usuario: req.session.user});
    } else {
        const prestadores = await Prestadores.findAll({
            where:{
                id_apartamento: req.session.user.id_apartamento
            }
        })

        
        return res.render('prestadoresDeServico', {prestadores, usuario: req.session.user});
    }
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
            return res.redirect('/prestadoresDeServico');

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
            return res.render('prestadoresDeServico', {prestador, usuario: req.session.user});
        }
        

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
