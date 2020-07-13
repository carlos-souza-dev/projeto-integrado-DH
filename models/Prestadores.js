module.exports = (sequelize, DataTypes) => {
    const Prestador = sequelize.define(
      "Prestadores",
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
      
        rg: DataTypes.INTEGER,
        cpf: DataTypes.INTEGER,
        categoria:DataTypes.STRING,
        foto: DataTypes.STRING,
        id_apartamento: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
      
      },{
          tableName:'prestadores',
          timestamps: false
      });

    return Prestador;
  };
  