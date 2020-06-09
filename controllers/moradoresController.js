const {Moradores} = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moradoresController = {

store: async (req, res) => {
        const [files] = req.files;
        const {nome, dataNascimento, rg, cpf} = req.body;

        const resultado = await Moradores.create(
            {nome, dataNascimento, rg, cpf, foto: `/img/${files.filename}`}
        )

        return res.redirect("/moradores");

    },

exibir: async (req, res) => {
    
    if (req.session.user.admin) {
        let users = await Moradores.findAll()

        return res.render('moradores', {users, usuario: req.session.user});

    } else {

        let users = await Moradores.findAll({
            where: {
                id_apartamento: {
                   [Op.eq] : req.session.user.id_apartamento
                }
            }
    })
    return res.render('moradores', {users, usuario: req.session.user});
}
    
        // console.log(req.session.user.id_apartamento)
    
   
    // console.log(users);
    
},
update: async (req, res) => {
    const {id} = req.params;
    const [files] = req.files;
    const {nome,dataNascimento, rg, cpf } = req.body;

    if ([files] == "") {
        const user = await Moradores.update({
            nome,
            dataNascimento,
            rg,
            cpf,
            foto: `/img/${files.filename}`
        }, {
            where: {
                id: id
            }
        })

    } else {
        const user = await Moradores.update({
            
            nome,
            dataNascimento,
            rg,
            cpf,
            foto: `/img/${files.filename}`
        }, {
            where: {
                id: id
            }
        })
    }
    return res.redirect('/Moradores');

},

destroy: async (req, res) => {
    const {id} = req.params;
    const resultado = await Moradores.destroy({
        where: {
            id: id
        }
    })

    return res.redirect('/moradores');

  }

}

module.exports = moradoresController;