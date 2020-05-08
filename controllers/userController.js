const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");
const morador = require("../models/index");

const userController = {
  create: (_req, res) => res.render("auth/register"),

  store: async (req, res) => {
    const { nome, cpf, email, senha } = req.body;
    const con = new Sequelize(config);
    const hashPassword = bcrypt.hashSync(senha, 10);

    const user = await con.query(
      "INSERT INTO moradores (nome, cpf, email , senha, create_at, update_at) values (:nome, :cpf, :email, :senha, :create_at, :update_at)",
      {
        replacements: {
          nome,
          cpf,
          email,
          senha: hashPassword,
          create_at: new Date(),
          update_at: new Date(),
        },
        type: Sequelize.QueryTypes.INSERT,
      }
    );
    if (!user) {
      return res.render("auth/register", {
        msg: "Erro ao cadastrar um usuario",
      });
    }

    return res.redirect("/login");
  },
};

module.exports = userController;
