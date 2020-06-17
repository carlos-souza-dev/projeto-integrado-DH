'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Visitas', 
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      email: {
          type: Sequelize.STRING(100),
          allowNull: false,
      },
      phone: Sequelize.STRING(45),
      CEP: Sequelize.STRING(45),
      logradouro: Sequelize.STRING(100),
      numero: Sequelize.STRING(45),
      complemento: Sequelize.STRING(45),
      bairro: Sequelize.STRING(45),
      cidade: Sequelize.STRING(45),
      estado: Sequelize.STRING(45),
      condominio: Sequelize.STRING(45),
      porte: Sequelize.STRING(45),
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false 
      }
    })
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('visitas');
  }
};
