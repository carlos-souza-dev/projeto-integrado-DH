const {Moradores, Prestadores, Classificados, Correspondencias, Comunicados, Solicitacoes} = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const homeController = {
    exibir: async (req, res) => {
        // const id = req.session.user.id_apartamento;
        
        const qtdMorador = await Moradores.count({
           where:{
            id_apartamento: req.session.user.id_apartamento
           }
        })
        console.log("Morador"+qtdMorador)

        const qtdPrestadores = await Prestadores.count({
            where:{
                id_apartamento: req.session.user.id_apartamento
            }
        })

        const qtdClassificados = await Classificados.count({
            where:{
                id_morador: req.session.user.id
            }
        })

        const anunciosViz = await Classificados.findAll({
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            },
            where:{
               id_morador:{
                [Op.ne] : req.session.user.id
               }  
            }
        })

        const meusAnuncios = await Classificados.findAll({
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            },
            where:{
               id_morador:{
                [Op.eq] : req.session.user.id
               }  
            }
        })

        const correspondencia = await Correspondencias.findAll({
            where:{
                apartamento:{
                 [Op.eq] : req.session.user.id_apartamento
                }  
             }
        });

        const comunicados = await Comunicados.findAll();

        const solicitacoes = await Solicitacoes.findAll({
            where:{
                id_morador:{
                 [Op.eq] : req.session.user.id
                }  
             }
        });
        
        console.log(solicitacoes)

        return res.render('home', {qtdMorador, qtdPrestadores, qtdClassificados, anunciosViz, meusAnuncios, correspondencia, comunicados, solicitacoes, usuario: req.session.user })
    }
    
}

module.exports = homeController;
