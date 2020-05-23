module.exports = (sequelize, DataTypes) => {
    const contatosUteis = sequelize.define(
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
        numero: DataTypes.INTEGER,
        email: DataTypes.STRING,
       
    })
      
    return contatosUteis;
  };
  