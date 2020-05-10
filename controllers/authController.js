const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");

const authController = {
    create: (_req, res) => {
        return res.render("login");
    },
    store: async (req, res) => {
        const {email, senha} = req.body;
        const con = new Sequelize(config);

        const [user] = await con.query(
            "select * from moradores where email=:email limit 1",
            {
                replacements: {
                    email
                },
                type: Sequelize.QueryTypes.SELECT
            }
        );
        //
        if (!user || !bcrypt.compareSync(senha, user.senha)) {
            return res.render("login", {msg: "Email ou senha errados!"});
        }

        req.session.user = {
            id: user.id,
            nome: user.nome,
            email: user.email,
            foto: user.foto
        };

        return res.redirect("home");
    },

    destroy: (req, res) => {
        req.session = undefined;
        return res.redirect("login");
    }
};

module.exports = authController;
