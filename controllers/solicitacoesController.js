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
            return res.render('solicitacoes', {result});
    },
    
}

module.exports = solictacoesController;
