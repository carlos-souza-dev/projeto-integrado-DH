'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('solicitacoes', [{
        id: 1,
        tipo: 'Autorização',
        data: new Date(),
        dataAlvo: '2020-06-13',
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
        dataAlvo: '2020-06-15',
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
        dataAlvo: '2020-06-14',
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
        dataAlvo: '2020-06-20',
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
        dataAlvo: '2020-06-21',
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
        dataAlvo: '2020-06-12',
        status: 'Pendente',
        descricao: "Limpeza do corredor 5º andar",
        comentarios: "",
        id_morador: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        tipo: 'Autorização',
        data: new Date(),
        dataAlvo: '2020-07-01',
        status: 'Pendente',
        descricao: "Liberação para entrada de convidados para festa de aniversário",
        comentarios: "",
        id_morador: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        tipo: 'Autorização',
        data: new Date(),
        dataAlvo: '2020-06-13',
        status: 'Pendente',
        descricao: "Uso do elevador para mudança",
        comentarios: "",
        id_morador: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        tipo: 'Reserva de área comum',
        data: new Date(),
        dataAlvo: '2020-06-27',
        status: 'Pendente',
        descricao: "Reserva da churrasqueira",
        comentarios: "",
        id_morador: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('solicitacoes', null, {});
    
  }
};
