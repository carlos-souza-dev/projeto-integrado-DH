const {Classificados, Moradores} = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const envarEmail = require('./email');

const classificadosController = {

    store: async (req,res) => {
        const [files] = req.files;
        const {titulo,descricao,categoria, tipo} = req.body;

        const classificado = await Classificados.create(
            {titulo, descricao, categoria, tipo, id_morador:req.session.user.id,foto: `/img/${files.filename}` }
        )
        
        // Função para enviar email
        envarEmail(titulo, descricao, Moradores.nome);
            
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
        
        return res.render('meusItens', {classificados, usuario: req.session.user})
    },

    exibirClassificados: async (req,res) => {
        let classificados =  await Classificados.findAll({
            include: {
                model: Moradores,
                as: 'morador',
                required: true
            }
        });
        
        return res.render('classificados', {classificados, usuario: req.session.user})
    },
    
    destroy: async (req, res) => {
        const {id} = req.params;
        const resultado = await Classificados.destroy({
            where: {
                id: id
            }
        })

        res.redirect('/meusItens')
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
                titulo, descricao, categoria, tipo, id_morador:req.session.user.id,foto: `/img/${files.filename}` 
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