module.exports = (sequelize, DataTypes) => {
    const Apartamento = sequelize.define(
      "Apartamentos",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        numeroApto:{ 
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      
        bloco: DataTypes.STRING,

        condominio_id:{
            type: DataTypes.INTEGER,
        }

         
      }, {
        tableName:'apartamentos',
        timestamps:false, 
    })
  
      Apartamento.associate  = (listaDeModelos) =>{
          Apartamento.belongsTo(listaDeModelos.Condominio,{
              foreingKey:'condominio_id',
              as: 'condominio',
          })
      }


    return Apartamento;
  };
  