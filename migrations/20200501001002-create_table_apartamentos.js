'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('apartamentos', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

       },
       numeroApto:{ 
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    
      bloco: Sequelize.STRING,

      condominio_id:{
          type: Sequelize.INTEGER,
          references:{
            model:{
              tableName:'condominio'
            },
            key:'id'
          }
      }


      });


  },

  down: (queryInterface, Sequelize) => {
    

   return queryInterface.dropTable('apartamentos');
  }
};
