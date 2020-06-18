const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");

const authController = {
    index: (_req, res) => {
        return res.render("login", {msg: ""});
    },

    logar: async (req, res) => {
        const {email, senha, logado} = req.body;
        const con = new Sequelize(config);

        const [user] = await con.query(
            "select * from moradores where email=:email limit 1",
            {
                replacements: {
                    email: email
                },
                type: Sequelize.QueryTypes.SELECT
            }
        );

        if (!user || !bcrypt.compareSync(senha, user.senha)) {
            return res.render("login", {msg: "Email ou senha inválidos!"});
        }

        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            id_apartamento: user.id_apartamento,
          };

        return res.redirect("/home");
        
    },

    destroy: (req, res) => {
        req.session = undefined;
        return res.redirect("/");
    }
};

module.exports = authController;
