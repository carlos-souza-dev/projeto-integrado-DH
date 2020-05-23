const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");

const authController = {
    create: (_req, res) => {
        return res.render("login", {msg: ""});
    },
    store: async (req, res) => {
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
        //
        if (!user || !bcrypt.compareSync(senha, user.senha)) {
            return res.render("login", {msg: "Email ou senha inválidos!"});
        }

        
        
        let usuario = {
            id: user.id,
            nome: user.nome,
            email: user.email,
            foto: user.foto,
            sobre: user.sobre,
            admin: user.admin? true : false,
            dataNascimento: user.dataNascimento,
            id_apartamento: user.id_apartamento,
        };

        if(logado == undefined){
            res.cookie('logado', user.email, {maxAge: 600000})
        }
        
        req.session.user = usuario;
                
        return res.render("home", {usuario});
        
    },

    destroy: (req, res) => {
        req.session = undefined;
        return res.redirect("/");
    }
};

module.exports = authController;
