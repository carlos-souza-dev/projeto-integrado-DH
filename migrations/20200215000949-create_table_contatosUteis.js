'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
   return queryInterface.createTable('contatosUteis', { 
     id:{
      type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

     } ,
     nome: Sequelize.STRING,
     cpf: Sequelize.STRING(11),
    
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
