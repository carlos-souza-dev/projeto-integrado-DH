'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('Solicitacoes', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
        type: Sequelize.STRING(6),
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    data: {
        type: Sequelize.DATE,
    },
    status: {
        type: Sequelize.ENUM('Em análise','Indeferida','Deferida'),
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    },
    {
        timestamps: false,
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