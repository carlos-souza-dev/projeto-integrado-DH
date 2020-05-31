module.exports = (sequelize, DataTypes) => {
    const Contato = sequelize.define(
      "ContatosUteis",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        foto: DataTypes.STRING,
        nome : DataTypes.STRING,
        descricao: DataTypes.STRING,
        numero: DataTypes.STRING,
        email: DataTypes.STRING,
       
    })
      
    return Contato;
  };
  