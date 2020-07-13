const {Moradores} = require("../models");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const session = require("express-session");
const fs = require("fs");

const Op = Sequelize.Op;

const perfilController = {

    //função para retornar todos os moradores
    index: async (req, res) => {
        let users = await Moradores.findAll();

        return res.render('perfil', {users});
    },

    create: (req, res) => {
        return res.render('perfil')
    },

    update: async (req, res) => {
        const id = req.session.user.id;
        const [files] = req.files;
        const {nome, email, senha, sobre, interesses} = req.body;

        if(files != undefined){

            const morador = await Moradores.findAll({where: {id: id}});
            
            const rota = morador[0].foto;
            const image = rota.slice(rota.lastIndexOf("/")+1);

            fs.unlink("public/img/user/"+ image, (error) => {
                if(error)
                    console.log(error)
                else {
                    console.log("O arquivo "+image+" foi removido com sucesso.")
                }
            })
        }

        if(files != undefined) {
            const resultado = await Moradores.update({
                foto: `/img/user/${files.filename}`
            }, {
                where: {
                    id: id
                }
            });
        };

        if(senha) {
            const hashPassword = bcrypt.hashSync(senha, 10);
            const resultado = await Moradores.update({
                senha: hashPassword
            }, {
                where: {
                    id: id
                }
            });
        };

        const resultado = await Moradores.update({
            nome,
            email,
            sobre,
            interesses: JSON.stringify(interesses),
        }, {
            where: {
                id: id
            }
        });

       
        const morador = await Moradores.findAll({where: {id: id}});
        
        const usuario = req.session.user;

        usuario.foto = morador[0].foto;
        usuario.nome = nome;
        usuario.email = email;
        usuario.sobre = sobre;
        usuario.interesses = interesses

        return res.render('perfil', {usuario: usuario});
    },

    edit: async (req, res) => {
        const id = req.session.user.id;

        const user = await Moradores.findByPk(id);
      
        
        return res.render('perfil', {user, usuario: req.session.user})
    },

    destroy: async (req, res) => {
        const {id} = req.session.user.id;
        const resultado = await Usuario
            .destroy({
                where: {
                    id: id
                }
            })
            res.render('/perfil', {usuario: req.session.user})
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
        return res.render('usuarios', {users, usuario: req.session.user})
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
        res.send("Criados")
    }
}

module.exports = perfilController;
