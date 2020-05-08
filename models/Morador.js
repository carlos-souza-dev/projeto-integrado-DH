module.exports = (sequelize, DataTypes) => {
    const Moradores = sequelize.define(
      "Moradores",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        senha: DataTypes.STRING,
      },
      
    );
  
      
    return Moradores;
  };
  