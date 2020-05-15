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
      
        bloco: DataTypes.VARCHAR,

        condominio_id:{
            type: DataTypes.INTEGER,
        }

         
      }, {
        
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
  