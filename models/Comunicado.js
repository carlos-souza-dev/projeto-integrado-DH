module.exports = (sequelize, DataTypes) => {
    const Comunicados = sequelize.define(
      "Comunicados",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        título:{ 
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      
         id_apartamentos: { 
         type: DataTypes.STRING(100),
         foreignKey: true,
      
    },
        data: {
          type: DateTime,
    },
        lido: {
        type: BOOLEAN,
    }
      
      });
  
      
    return Comunicados;
  };
  