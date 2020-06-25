'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('comunicados', { 
        id:{ 
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          
        },
        titulo:{ 
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      
        informacao: Sequelize.TEXT,

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE

      });
     
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('comunicados');
   
  }
};

