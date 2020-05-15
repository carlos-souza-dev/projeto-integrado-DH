const Sequelize = require("sequelize");
const config = require("../config/database");
const {Solicitacao} = require("../models");

const solictacoesController = {
    solicitacoes: async (req, res) => {
            const db = new Sequelize(config)
            const result = await db.query("select * from solicitacoes", {type:Sequelize.QueryTypes.SELECT});

            // console.log(result);
            res.render('solicitacoes', {result: result, title: 'Solicitacoes' });
    },
    store: async (req, res) => {
          const {codigo,tipo,data,status} = req.body;
  
          const resultado = await Solicitacao.create("INSERT INTO solicitacoes",
              {codigo, tipo, data, status}
          );

          console.log(resultado);
          return res.redirect("/solicitacoes");
    }
    
}

module.exports = solictacoesController;
