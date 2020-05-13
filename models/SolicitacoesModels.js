module.exports = (sequelize, DataTypes) => {
    const Solicitacoes = sequelize.define("Solicitacoes",{
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titulo: DataTypes.STRING(45),
        date: DataTypes.DATE,
        texto: DataTypes.STRING(500),
      },      
    ); 
  
      
    return Solicitacoes;
  };