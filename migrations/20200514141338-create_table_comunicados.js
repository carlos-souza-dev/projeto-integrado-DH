'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('comunicados', { 
        id:{ 
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false
        },
        título:{ 
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      
         id_apartamentos: { 
         type: Sequelize.STRING(100),
         foreignKey: true,
      
    },
        data: {
          type: Sequelize.DATE,
    }

      });
     
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('comunicados');
   
  }
};
