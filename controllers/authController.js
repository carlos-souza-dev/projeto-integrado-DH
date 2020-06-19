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
            nome: user.nome,
            email: user.email,
            id_apartamento: user.id_apartamento,
            admin: user.admin,
          };

        return res.redirect("/home");
        
    },

    recuperar: (req, res) => {        
        return res.render("recuperar", {msg: ""});
    },

    forgot: async (req, res) => {

            const {email} = req.body;

            try {
                
            const user = await Moradores.findOne({where: {email:email}});

            if( user ) {

            // return res.status(400).send({alerta: "E-mail não cadastrado."});
            
            const token = crypto.randomBytes(20).toString('hex');
            
            const now = new Date();
            now.setHours(now.getHours() + 1);
            
            console.log("Token "+ user.id);
            
            // await Moradores.findByIdAndUpdate(user.id, {
            //     "$set": {
            //         senhaTemporaria: token,
            //         senhaTemporariaExpira: now,
            //     }
            // });

            const salvar = await Moradores.update({
                senhaTemporaria: token,
                senhaTemporariaExpira: now,
            }, 
            {
                where: {email: email}
            },
        )
            
            enviarEmailSenha(email, token, user.nome);
            return res.render("sucesso", {email});
            
        } else {
            
            return res.render("recuperar", {error: "E-mail não encontrado."})
            
        }} catch {
            
            res.status(400).send({error: "Erro, tente novamente."})

        }
    },

    destroy: (req, res) => {
        req.session = undefined;
        return res.redirect("/");
    }
};

module.exports = authController;
