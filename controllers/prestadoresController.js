const Sequelize = require("sequelize");
const {Prestadores} = require("../models");

const prestadoresController = {
    
    store: async (req, res) => {
        const {nome, rg, cpf, categoria, foto} = req.body;

        const conteudo = await Prestadores.create(
            {nome, rg, cpf, categoria, foto}
        )
       
        return res.redirect("/prestadoresDeServico");
        

    },

    prestadores: async (req, res) => {
           
            
        const result = await Prestadores.findAll()
            return res.render('prestadores', {result});
    },
    

}

module.exports = prestadoresController;
