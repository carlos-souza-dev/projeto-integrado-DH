'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('solicitacoes', [{
        id: 1,
        tipo: 'Autorização',
        data: new Date(),
        dataAlvo: 20200613,
        status: 'Pendente',
        descricao: "Liberação para reforma no apartamento",
        comentarios: "",
        id_morador: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        tipo: 'Reserva de área comum',
        data: new Date(),
        dataAlvo: 20200615,
        status: 'Pendente',
        descricao: "Reserva de salão de festas",
        comentarios: "",
        id_morador: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        tipo: 'Serviço',
        data: new Date(),
        dataAlvo: 20200614,
        status: 'Pendente',
        descricao: "Conserto encanamento",
        comentarios: "",
        id_morador: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        tipo: 'Serviço',
        data: new Date(),
        dataAlvo: 20200620,
        status: 'Pendente',
        descricao: "Esgoto entupido",
        comentarios: "",
        id_morador: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        tipo: 'Reserva de área comum',
        data: new Date(),
        dataAlvo: 20200621,
        status: 'Pendente',
        descricao: "Salão de festas",
        comentarios: "",
        id_morador: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        tipo: 'Serviço',
        data: new Date(),
        dataAlvo: 20200612,
        status: 'Pendente',
        descricao: "Limpeza do corredor 5º andar",
        comentarios: "",
        id_morador: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('solicitacoes', null, {});
    
  }
};
