const {Classificados, Moradores} = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const classificadosController = {

    store: async (req,res) => {
        const [files] = req.files;
        const {titulo,descricao} = req.body;

        const classificado = await Classificados.create(
            {titulo, descricao, id_morador:req.session.user.id,foto: `/img/${files.filename}` }
        )
        
        
        return res.redirect("/meusItens");

    },
    exibirMeusItens: async (req,res) =>{
        let classificados = await Classificados.findAll({
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            },
            where: {
                id_morador: {
                   [Op.eq] : req.session.user.id
                }
                
            }
        });
        console.log(classificados)
        return res.render('meusItens', {classificados})
    },

    exibirClassificados: async (req,res) => {
        let classificados =  await Classificados.findAll({
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            }
        });
        console.log(classificados)
        return res.render('classificados', {classificados})
    },
    
    destroy: async (req, res) => {
        const {id} = req.params;
        const resultado = await Classificados.destroy({
            where: {
                id: id
            }
        })

        res.redirect('/meusItens')
    }


}

module.exports = classificadosController