'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
   return queryInterface.createTable('documentacoes', { 
     id:{
      type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

     } ,
     nomeDoc: Sequelize.STRING,
     descricao: Sequelize.STRING,
     documento: Sequelize.STRING,
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
   return queryInterface.dropTable('documentacoes');
  }
};
