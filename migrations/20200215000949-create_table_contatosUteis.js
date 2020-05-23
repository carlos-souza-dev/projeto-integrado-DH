'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
   return queryInterface.createTable('contatosUteis', { 
     id:{
      type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

     } ,
     foto: Sequelize.STRING,
     nome: Sequelize.STRING,
     descricao: Sequelize.STRING,
     numero:Sequelize.INTEGER,
     email:Sequelize.STRING,
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
   return queryInterface.dropTable('contatosUteis');
  }
};
