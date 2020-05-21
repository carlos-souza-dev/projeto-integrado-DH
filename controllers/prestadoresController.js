const Sequelize = require("sequelize");
const config = require("../config/database");
const {Prestadores} = require("../models");

const prestadoresController = {
    
    store: async (req, res) => {
        const [files] = req.files;
        const {nome, rg, cpf, categoria} = req.body;

        const conteudo = await Prestadores.create(
            {nome, rg, cpf, categoria,  foto: `/img/${files.filename}`}
        )
       
        return res.redirect("/prestadoresDeServico");
        

    },

    prestadores: async (req, res) => {
           
            
        const result = await Prestadores.findAll()
            return res.render('prestadoresDeServico', {result});
    },
    

}

module.exports = prestadoresController;
