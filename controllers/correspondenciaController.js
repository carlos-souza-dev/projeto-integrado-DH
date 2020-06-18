const Sequelize = require("sequelize");
const {Correspondencias} = require("../models");
const Op = Sequelize.Op;


const correspondenciaController = {
    create: (req, res) => {
        return res.render("correspondencias")
    },
    store: async (req, res) => {
        const {tipo,destinatario,apartamento} = req.body;

        const correspondencia = await Correspondencias.create(
            {tipo,destinatario,apartamento}
        )
       
        // console.log(titulo, informacao)
        return res.redirect("/correspondencias");

    },

    exibir: async (req, res) => {
        if (req.session.user.admin) {
            const correspondencia = await Correspondencias.findAll({
                order: [
                    ['apartamento','ASC']
                ]
            })
            return res.render('correspondencias', {correspondencia, usuario: req.session.user})

        } else {
        const correspondencia = await Correspondencias.findAll({
            where:{
                apartamento:{
                 [Op.eq] : req.session.user.id_apartamento
                }  
             }
        })
        return res.render('correspondencias', {correspondencia, usuario: req.session.user})
    }  
        
    },

    destroy: async (req, res) => {
        const {id} = req.params;
        const resultado = await Correspondencias.destroy({
            where: {
                id: id
            }
        })

        res.redirect('/correspondencias')
    }

    

};

module.exports = correspondenciaController;
