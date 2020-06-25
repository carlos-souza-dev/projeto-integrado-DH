module.exports = (sequelize, DataTypes) => {
    const Documentacao = sequelize.define(
      "Documentacoes",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nomeDoc:{ 
          type: DataTypes.STRING,
          
        },
      
       descricao: DataTypes.STRING,
       documento: DataTypes.STRING,
    },{
      tableName:'documentacoes'
      
      })
      
    return Documentacao;
  };
  