'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('documentacoes', [{
        id: 1,
         nomeDoc: 'Planta Apartamento',
         descricao: 'Apartamento 2 quartos',
         documento: '/docs/planta_apartamento.pdf',
         createdAt: new Date(),
         updatedAt: new Date()
      },
    {
      id: 2,
      nomeDoc: 'Planta Apartamento 2',
      descricao: 'Apartamento 3 quartos',
      documento: '/docs/planta_apartamento.pdf',
      createdAt: new Date(),
      updatedAt: new Date() 
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      Example:
      return queryInterface.bulkDelete('documentacoes', null, {});
    
  }
};
