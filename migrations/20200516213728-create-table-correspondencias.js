'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('correspondencias', { 
        id:{ 
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          
        },
        tipo:{ 
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      
        destinatario: Sequelize.STRING,

        apartamento: Sequelize.INTEGER,
        
        
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE

      });
     
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('correspondencias');
   
  }
};

