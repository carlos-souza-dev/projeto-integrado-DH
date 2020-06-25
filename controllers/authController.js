const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");
const {Moradores} = require("../models");
const crypto = require("crypto");
const enviarEmailSenha = require("./emailSenha");

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
            foto: user.foto,
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

            const token = crypto.randomBytes(20).toString('hex');
            
            const now = new Date();
            now.setHours(now.getHours() + 1);
            
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
    
    token: (req, res) => {
        
        return res.render("usartoken");
    },
    
    storetoken: async (req, res) => {

        const {email, token, senha} = req.body;

        const user = await Moradores.findOne({where: {email: email}})
        
        if( token == user.senhaTemporaria) {
            
            const now = new Date();
            
            if( now < user.senhaTemporariaExpira) {
                console.log("Agora " + now);
                console.log("user " + user.senhaTemporariaExpira);

                const hashPassword = bcrypt.hashSync(senha, 10);

                const save = await Moradores.update({ 
                    senha: hashPassword,
                    senhaTemporaria: "",
                    senhaTemporariaExpira:""},
                    {
                    where: {email: email}
                })

                res.render("login");

            } else {

                res.render("usartoken",{error: "Token expirado, gere um novo."})
            }
        } else {

            res.render("usartoken",{error: "Token invalido."})

        }

    },

    destroy: (req, res) => {
        req.session = undefined;
        return res.redirect("/");
    }
};

module.exports = authController;
