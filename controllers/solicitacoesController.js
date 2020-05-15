const Sequelize = require("sequelize");
const config = require("../config/database");
const {Solicitacoes} = require("../models");

const solictacoesController = {
    solicitacoes: async (req, res) => {
            const db = new Sequelize(config)
            const result = await db.query("select * from solicitacoes", {type:Sequelize.QueryTypes.SELECT});

            // console.log(result);
            res.render('solicitacoes', {result, title: 'Solicitacoes' });
    },
    store: async (req, res) => {
          const {codigo,tipo,status} = req.body;

          const resultado = await Solicitacoes.create (
              {codigo, tipo, data: new Date, status}
          );

       
          return res.render("solicitacoes");
    }
    
}

module.exports = solictacoesController;
