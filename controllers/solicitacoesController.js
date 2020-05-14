const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");
const {Moradores} = require("../models");

const solictacoesController = {
    solicitacoes: async (req, res) => {
            const db = new Sequelize(config)
            const result = await db.query("select * from Solicitacoes", {type:Sequelize.QueryTypes.SELECT});

            // console.log(result);
            res.render('solicitacoes', {result, title: 'Solicitacoes' });
          }
}

module.exports = solictacoesController;
