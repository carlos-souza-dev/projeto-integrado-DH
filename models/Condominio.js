module.exports = (sequelize, DataTypes) => {
    const Condominio = sequelize.define(
      "Condominio",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome:{ 
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      
        endereco: DataTypes.STRING,

        tipo_predio_casa: DataTypes.STRING,

        qtde_habitacoes: DataTypes.INTEGER,

        contatos_uteis_id: DataTypes.INTEGER, 
 
   
      
      }, {
          tableName: 'condominio',
          timestamps:false, 
      })

      // Condominio.associate = (listaDeModelos) =>{
      //     Condominio.hasMany(listaDeModelos.ContatosUteis,{
      //         foreingKey:'contatos_uteis_id',
      //         as: contatosUteis
      //     })
      // }
  
      
    return Condominio;
  };
