module.exports = (sequelize, DataTypes) => {
    const Prestador = sequelize.define(
      "Prestadores",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        tipo:{ 
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      
        rg: DataTypes.INTEGER,

        cpf: DataTypes.INTEGER,

        foto: DataTypes.STRING,
   
      
      })


  
      
    return Prestador;
  };
  