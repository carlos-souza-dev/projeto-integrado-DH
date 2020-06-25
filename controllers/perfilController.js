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
        const {nome, email, senha, sobre, interesses} = req.body;

        if(files != undefined) {
            const resultado = await Moradores.update({
                foto: `/img/${files.filename}`
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

       

        const usuario = req.session.user;

        usuario.foto = `/img/${files.filename}`;
        usuario.nome = nome;
        usuario.email = email;
        usuario.sobre = sobre;
        usuario.interesses = interesses

        return res.render('perfil', {usuario: usuario});
    },

    // update: async (req, res) => {
    //     const id = req.session.user.id;
    //     const [files] = req.files;
    //     const {nome, email, senha, sobre, interesses} = req.body;

        // if ((senha !== "") && ([files] == "")) {
    //         const hashPassword = bcrypt.hashSync(senha, 10);
    //         const resultado = await Moradores.update({
    //             nome,
    //             email,
    //             senha: hashPassword,
    //             sobre,
    //             interesses
    //         }, {
    //             where: {
    //                 id: id
    //             }
    //         })
            
    //     return res.render('perfil' ,{usuario: req.session.user});

    //     } else if ([files] == "") {
    //         const resultado = await Moradores.update({
    //             nome,
    //             email,
    //             sobre,
    //             interesses
    //         }, {
    //             where: {
    //                 id: id
    //             }
    //         });
            
    //     return res.render('perfil' ,{usuario: req.session.user});

    //     } else if (senha == "") {
    //         const resultado = await Moradores.update({
    //             foto: `/img/${files.filename}`,
    //             nome,
    //             email,
    //             sobre,
    //             interesses,
    //         }, {
    //             where: {
    //                 id: id
    //             }
    //         });
    //         req.session.user.foto = `/img/${files.filename}`;
    //     return res.render('perfil' ,{usuario: req.session.user});
    //     };
        
    // },

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
            // console.log(resultado)
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
   


}

module.exports = perfilController;
