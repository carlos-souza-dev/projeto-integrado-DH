
module.exports = (sequelize, DataTypes) => {
  const Solicitacoes = sequelize.define("Solicitacoes",{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      data: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM('Em análise','Indeferida','Deferida'),
        allowNull: false,
      },
      createAt: DataTypes.DATE,
      updateAt: DataTypes.DATE,
    },{
      tableName:'solicitacoes'
      
      }
  ); 

    
  return Solicitacoes;
};