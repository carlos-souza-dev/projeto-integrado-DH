'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('correspondencias', [{
        id:1,
        tipo: 'Encomenda',
        destinatario: 'Camila Lopes',
        apartamento: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      id:2,
      tipo: 'Carta',
      destinatario: 'Carlos Silva',
      apartamento: 3,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
  {
    id:3,
      tipo: 'Encomenda',
      destinatario: 'Daniel Santamaria',
      apartamento: 4,
      createdAt: new Date(),
      updatedAt: new Date()
  },
{
  id:4,
      tipo: 'Carta',
      destinatario: 'Gustavo Nobrega',
      apartamento: 5,
      createdAt: new Date(),
      updatedAt: new Date()
},
{
  id:5,
      tipo: 'Encomenda',
      destinatario: 'Juliana Borges',
      apartamento: 6,
      createdAt: new Date(),
      updatedAt: new Date()
}, 
{
  id:6,
      tipo: 'Carta',
      destinatario: 'Alex Araujo',
      apartamento: 6,
      createdAt: new Date(),
      updatedAt: new Date()
},
{
  id:7,
      tipo: 'Carta',
      destinatario: 'Camila Lopes',
      apartamento: 2,
      createdAt: new Date(),
      updatedAt: new Date()
},
{
  id:8,
      tipo: 'Encomenda',
      destinatario: 'Gabriel Lopes',
      apartamento: 2,
      createdAt: new Date(),
      updatedAt: new Date()
},
{
  id:9,
      tipo: 'Carta',
      destinatario: 'Renan Lopes',
      apartamento: 2,
      createdAt: new Date(),
      updatedAt: new Date()
}], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('correspondencias', null, {});
    
  }
};
