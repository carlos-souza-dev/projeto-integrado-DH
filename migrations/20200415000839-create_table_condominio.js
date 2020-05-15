'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('condominio', { 
      id:{ 
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,  
      },
      nome:{ 
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    
      endereco: Sequelize.STRING,

      tipo_predio_casa: Sequelize.STRING,

      qtde_habitacoes: Sequelize.INTEGER,

      contatos_uteis_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'contatosUteis'
          },
          key:'id'
        }
      }

    });
   
},

down: (queryInterface, Sequelize) => {
 
    return queryInterface.dropTable('condominio');
 
}
};



