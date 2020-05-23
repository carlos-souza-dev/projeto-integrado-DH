const {Moradores} = require("../models");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const session = require("express-session");

const Op = Sequelize.Op;

const perfilController = {

    //função para retornar todos os moradores
    index: async (req, res) => {
        let users = await Moradores.findAll();
        // console.log(users);

        return res.render('perfil', {users});
    },

    create: (req, res) => {
        return res.render('perfil')
    },

    update: async (req, res) => {
        const id = req.session.user.id;
        const [files] = req.files;
        const {nome, email, senha, sobre} = req.body;

        if ((senha !== "") && ([files] == "")) {
            const hashPassword = bcrypt.hashSync(senha, 10);
            const resultado = await Moradores.update({
                nome,
                email,
                senha: hashPassword,
                sobre
            }, {
                where: {
                    id: id
                }
            })
        } else if ([files] == "") {
            const resultado = await Moradores.update({
                nome,
                email,
                sobre

            }, {
                where: {
                    id: id
                }
            });
        } else if (senha == "") {
            const resultado = await Moradores.update({
                foto: `/img/${files.filename}`,
                nome,
                email,
                sobre
            }, {
                where: {
                    id: id
                }
            });
        };

        return res.redirect('/perfil');
    },

    edit: async (req, res) => {
        const id = req.session.user.id;

        const usuario = await Moradores.findByPk(id);
      
        
        return res.render('perfil', {usuario})
    },

    destroy: async (req, res) => {
        const {id} = req.session.user.id;
        const resultado = await Usuario
            .destroy({
                where: {
                    id: id
                }
            })
            // console.log(resultado)
            res.redirect('/perfil')
    },
    
    search: async (req, res) => {
        let {key} = req.query 
        let users = await Usuario.findAll({
            where: {
                nome: {
                    [Op.like]: `%${key}%`
                }
            },
            order: [
                ['id_usuario', 'ASC']
            ]
        });
        return res.render('usuarios', {users})
    },
   


    // aplicar essa função para criar usuarios automatico
    bulkCreate: async (req, res) => {
        const listaDeUsuarios = [
            {
                nome: "Teste 1",
                email: 'teste1@email.com',
                senha: '123456'
            }, {
                nome: "Teste 2",
                email: 'teste2@email.com',
                senha: '223456'
            }, {
                nome: "Teste 3",
                email: 'teste3@email.com',
                senha: '223456'
            }, {
                nome: "Teste 4",
                email: 'teste4@email.com',
                senha: '123456'
            }
        ]
        const resultado = await Usuario.bulkCreate(listaDeUsuarios);
        // console.log(resultado)
        res.send("Criados")
    }
}

module.exports = perfilController;
