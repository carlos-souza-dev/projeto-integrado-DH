const Sequelize = require("sequelize");
const config = require("../config/database");
const {Solicitacoes} = require("../models");

const solictacoesController = {
    
    store: async (req, res) => {
          const {codigo,tipo,status} = req.body;

          const resultado = await Solicitacoes.create (
              {codigo, tipo, data: new Date, status}
          );

       
          return res.redirect("/solicitacoes");
    },

    solicitacoes: async (req, res) => {
           
            
        const result = await Solicitacoes.findAll()
            // console.log(result);
            return res.render('solicitacoes', {result});
    },
    
}

module.exports = solictacoesController;
