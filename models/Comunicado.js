module.exports = (sequelize, DataTypes) => {
    const Comunicado = sequelize.define(
      "Comunicados",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titulo:{ 
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      
        informacao: DataTypes.TEXT,

             
      
      })

      
    //   Comunicado.associate  = (listaDeModelos) =>{
    //     Comunicado.belongsTo(listaDeModelos.Apartamento,{
    //         foreingKey:'id_apartamento',
    //         as: 'apartamento',
    //     })
    // }
  
      
    return Comunicado;
  };
  