'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('moradores', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome:{
       type: Sequelize.STRING(45),
       allowNull: false,
    },
    cpf:{
      type: Sequelize.STRING(11),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING(245),
      allowNull: false,
    },
    foto: Sequelize.STRING(245),
    sobre: Sequelize.STRING(245),
    interesses:  {
      type: Sequelize.STRING,
    },
    admin: {
      type: Sequelize.BOOLEAN,
    },
    dataNascimento: Sequelize.DATEONLY,
    id_apartamento: {
      type: Sequelize.INTEGER,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    });
    
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('moradores');
  }
};
