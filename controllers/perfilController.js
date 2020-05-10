const { Morador } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const perfilController = {
   
    index: (_req, res) => res.render("perfil"),

   
    // view: async (req, res) => {
    //     const { user } = req.session;
    
    //     const foto = await Foto.findAll({
    //       include: [
    //         {
    //           model: Morador,
    //           as: "morador",
    //           required: true,
    //         },
    //     ]
    //     });
    
          
    //     return res.render("perfil");
    // },
    
    // store: async (req, res) => {
    //   const [photo] = req.files;
    //   const { user } = req.session;
    //     id = user.id;
      
    //   const User_id = await Morador.findByPk(id);
      
    //   const newPhoto = await Morador.update{
    //     foto: `upload/${photo.filename}`,
              
    //   };
  
    //   return res.redirect("/perfil");
    // },
};



module.exports = perfilController;
