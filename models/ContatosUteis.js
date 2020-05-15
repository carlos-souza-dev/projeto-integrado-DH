module.exports = (sequelize, DataTypes) => {
    const contatosUteis = sequelize.define(
      "contatosUteis",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome:{ 
          type: DataTypes.STRING,
          
        },
      
        cpf: DataTypes.STRING(11),
    })
      
    return contatosUteis;
  };
  