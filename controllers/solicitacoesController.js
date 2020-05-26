const Sequelize = require("sequelize");
const config = require("../config/database");
const {Moradores, Solicitacoes} = require("../models");

const solictacoesController = {
    
    store: async (req, res) => {
          const {tipo, descricao} = req.body;

          const resultado = await Solicitacoes.create ({
              tipo, 
              data: new Date, 
              status: 'Pendente', 
              descricao,
              id_morador: req.session.user.id,
            }
          );

       
          return res.redirect("/solicitacoes");
    },

    solicitacoes: async (req, res) => {
           
            
        const result = await Solicitacoes.findAll({
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            }
        })
            // console.log(result);
            return res.render('solicitacoes', {result, usuario: req.session.user});
    },

    updateAp: async (req, res) => {
        const {id} =  req.params;
        const {comentarios} = req.body;
        const result = await Solicitacoes.update({
                comentarios: comentarios,
                status: 'Aprovada',
            }, 
            {
                where: {id: id}
            },
        )
            return res.redirect('/solicitacoes')
    },
    
    updateRep: async (req, res) => {
        const {id} =  req.params;
        const {comentarios} = req.body;
        const result = await Solicitacoes.update({
                comentarios: comentarios,
                status: 'Reprovada',
            }, 
            {
                where: {id: id}
            },
        )
            return res.redirect('/solicitacoes')
    },

    destroy: async (req, res) => {
        const {id} = req.params;
        const result = await Solicitacoes.destroy({
            where: {id: id}
        })
        return res.redirect('/solicitacoes')
    }
}

module.exports = solictacoesController;
