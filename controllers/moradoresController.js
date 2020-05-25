const {Moradores} = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moradoresController = {

exibir: async (req, res) => {
    // console.log(req.session.user.id_apartamento)
    
    let users = await Moradores.findAll({
        where: {
            id_apartamento: {
               [Op.eq] : req.session.user.id_apartamento
            }
        }
    });
   
    // console.log(users);
    return res.render('moradores', {users});
},


}

module.exports = moradoresController;