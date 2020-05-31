'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('contatosUteis', [{
        id:1,
         foto: './img/user/joao_das_neves.jpg',
         nome: 'João das Neves',
         descricao: 'Sindico',
         numero:'98789-9909',
         email:'joaodasneves@email.com',
         createdAt: new Date(),
         updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('contatosUteis', null, {});
    
  }
};
