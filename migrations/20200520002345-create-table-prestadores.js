'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.createTable('Prestadores', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome:{
      type: Sequelize.STRING(45),
      allowNull: false,
   },
   rg:{
    type: Sequelize.STRING(11),
    allowNull: false,
  },
   cpf:{
     type: Sequelize.STRING(11),
     allowNull: false,
   },
   foto: Sequelize.STRING,

   
    });
    
  },


  down: (queryInterface, Sequelize) => {
    
   return queryInterface.dropTable('prestadores');
  }
};