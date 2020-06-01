const {Moradores} = require("../models");
const Sequelize = require("sequelize");

const moradoresController = {

exibir: async (req, res) => {
    let users = await Moradores.findAll();
    console.log(users);

    return res.render('moradores', {users});
},

}

module.exports = moradoresController;