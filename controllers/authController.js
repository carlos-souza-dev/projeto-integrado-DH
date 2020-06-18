const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");
const {Moradores} = require("../models");
const crypto = require("crypto");
const enviarEmailSenha = require("./email");

const authController = {
    index: (_req, res) => {
        return res.render("login", {msg: "", alerta: ""});
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
            return res.render("login", {msg: "Email ou senha inválidos!", alerta:""});
        }

        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            id_apartamento: user.id_apartamento,
            admin: user.admin,
          };

        return res.redirect("/home");
        
    },

    recuperar: (req, res) => {
        return res.render("recuperar", {msg: ""});
    },

    enviar: async (req, res) => {

            // const {email} = req.body;
            const email = "carlos.beto71@gmail.com";

            try {
            const user = await Moradores.findOne({where: {email:email}});

            if(!user) 

                return res.status(400).send({alerta: "E-mail não cadastrado."});
            
                const token = crypto.randomBytes(20).toString('hex');

                const now = new Date();
                now.setHours(now.getHours() + 1);

                await Moradores.findByIdAndUpdate(user.id, {
                    "$set": {
                        senhaTemporaria: token,
                        senhaTemporariaExpira: now,
                    }
                })
                console.log(token, now);
            enviarEmailSenha(email, token);
            return res.render("login", {alerta: "Enviamos a senha para seu e-mail"});
        } catch {

            res.status(400).send({error: "Erro, tente novamente."})

        }
    },

    destroy: (req, res) => {
        req.session = undefined;
        return res.redirect("/");
    }
};

module.exports = authController;
