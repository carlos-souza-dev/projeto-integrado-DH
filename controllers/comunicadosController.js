const Sequelize = require("sequelize");
const {Comunicados} = require("../models");

const comunicadosController = {
    
    index: async (req, res) => {      
       
        return res.render('criarComunicado', {usuario: req.session.user} );

    },

    store: async (req, res) => {
        const {titulo,informacao} = req.body;

        const conteudo = await Comunicados.create(
            {titulo, informacao}
        )
       
        return res.redirect("/comunicados");

    },

    exibir: async (req, res) => {
        let comunicados = await Comunicados.findAll({
            order: [
                ['createdAt','DESC']
            ]
        });
        
        return res.render('comunicados', {comunicados, usuario: req.session.user})
    },
    
    destroy: async (req, res) => {
        const {id} = req.params;
        const resultado = await Comunicados.destroy({
            where: {
                id: id
            }
        })
       
        res.redirect('/comunicados')
    }, 

    update: async (req, res) => {
        const {id} =  req.params;
        const {titulo,informacao} = req.body;

                       
        const result = await Comunicados.update({
                titulo: titulo,
                informacao: informacao,
            }, 
            {
                where: {id: id}
            },
        )
            return res.redirect('/comunicados')
    },
    
    exibirUpdate: async (req, res) => {
        const {id} =  req.params;
        
        const comunicados = await Comunicados.findOne({
            where:{
                id:id
            }
        });
        
            res.render('updateComunicado', {comunicados,usuario: req.session.user})
    },
};

module.exports = comunicadosController;
