'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.createTable('Solicitacoes', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    data: {
        type: Sequelize.DATE,
    },
    dataAlvo: {
      type: Sequelize.DATEONLY,
    },
    status: {
        type: Sequelize.ENUM('Pendente','Reprovada','Aprovada'),
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    comentarios: {
        type: Sequelize.STRING(250),
    },
    id_morador: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false }
    });
    
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('solicitacoes');
  }
};