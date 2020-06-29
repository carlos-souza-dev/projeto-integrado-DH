const {Classificados, Moradores} = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const enviarEmail = require('./emailClassificados');
const path = require('path');
const deletarClassificados = require("./deletarController");
const { body } = require("express-validator");
const { json } = require("sequelize");
const { post } = require("../routes");
// console.log(" TESTE DO EMAIL: "+ enviarEmail);

const classificadosController = {

    store: async (req,res) => {
        const [files] = req.files;
        const {titulo,descricao,categoria, tipo} = req.body;

        const nome = req.session.user.nome;
        const image = files.filename;
        const aprovacao = 0;
        
        const classificado = await Classificados.create(
            {titulo, descricao, categoria, tipo, aprovacao, id_morador:req.session.user.id, foto: `/img/classificados/${files.filename}` }
            )
            
        enviarEmail(image, titulo, descricao, nome);
        
        return res.redirect("/meusItens");

    },
    exibirMeusItens: async (req,res) =>{
        let classificados = await Classificados.findAll({
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            },
            where: {
                id_morador: {
                   [Op.eq] : req.session.user.id
                }
                
            }
        });
        
        return res.render('meusItens', {classificados, usuario: req.session.user, msg:""})
    },

    aprovarClassificados: async (req,res) => {

        const classificado =  await Classificados.findAll({
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            }
        });
                    
        const user = req.session.user.admin;

        const postagens = [];
        
                    
            classificado.forEach(posts => {            
                if(posts.aprovacao == 0) {
                    postagens.push(posts.toJSON());
                    console.log(posts.toJSON());
    
                }
            });
            
            return res.render('aprovarClassificados', {classificados: postagens, usuario: req.session.user})
        
        
            
               
    },
    
    exibirClassificados: async (req,res) => {

        
        const classificado =  await Classificados.findAll({
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            }
        });

        const postagens = [];

        
        classificado.forEach(posts => {            
            if(posts.aprovacao == 1) {
                postagens.push(posts.toJSON());
                console.log("Postagens para usuarios");
                // console.log(posts.toJSON());

            }
        });
        
        const user = req.session.user.admin;

        return res.render('classificados', {classificados: postagens, usuario: req.session.user})

        
    },


    destroy: async (req, res) => {
        const {id} = req.params;

        const classificado = await Classificados.findAll({where: {id: id}});
        console.log("Imagem do banco " + classificado[0].foto);
        
        const rota = classificado[0].foto;
        const image = rota.slice(rota.lastIndexOf("/")+1);

        deletarClassificados(image);
                    
        const resultado = await Classificados.destroy({
            where: {
                id: id
            }
        })
        
        res.redirect('/meusItens')
    },

    destroyAdm: async (req, res) => {

        const {id} = req.params;
        const {situacao} = req.body;

        if(situacao == 0) {

            const resultado = await Classificados.destroy({
                where: {
                    id: id
                }
            })
    
            res.redirect('/classificados')
            
        } else {
            
            const classificado = await Classificados.update({
                aprovacao: situacao
            }, {
                where: {
                    id: id
                }
            })
            
            res.redirect('/classificados')
        }
    },

    
    update: async (req, res) => {
        const {id} = req.params;
        const [files] = req.files;
        const {titulo,descricao,categoria, tipo} = req.body;

        if ([files] == "") {
            const classificado = await Classificados.update({
                titulo, descricao, categoria, tipo, id_morador:req.session.user.id
            }, {
                where: {
                    id: id
                }
            })

        } else {
            const classificado = await Classificados.update({
                titulo, descricao, categoria, tipo, id_morador:req.session.user.id,foto: `/img/classificados/${files.filename}` 
            }, {
                where: {
                    id: id
                }
            })
        }
        return res.redirect('/meusItens');

    },

    search: async (req, res) => {
        const {busca, categoria, tipo} = req.body;

        if (busca != ""){
        const classificados = await Classificados.findAll({
            where: {
                [Op.or]: [
                  {
                    titulo: {
                      [Op.like]: `%${busca}%`
                    }
                  },
                  {
                    descricao: {
                      [Op.like]: `%${busca}%`
                    }
                  }
                ]
              },
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            }
        })
        
        return res.render('classificados', {classificados, usuario: req.session.user})
    }
        
    else if (categoria){
        const classificados = await Classificados.findAll({
            where:{
                categoria: categoria,
            },
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            }

        })
        
        return res.render('classificados', {classificados, usuario: req.session.user})

    } else if (tipo){
        const classificados = await Classificados.findAll({
            where:{
                tipo: tipo,
            },
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            }
        })
        
        return res.render('classificados', {classificados, usuario: req.session.user})
    }

      

    } 


}

module.exports = classificadosController