'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    

   return queryInterface.createTable('classificados', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: Sequelize.STRING,
    foto: Sequelize.STRING,
    descricao: Sequelize.STRING,
    id_morador: {
      type: Sequelize.DataTypes.INTEGER,
      
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */

   return queryInterface.dropTable('classificados');
  }
};
