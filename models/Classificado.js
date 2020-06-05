module.exports = (sequelize, DataTypes) => {
    const Classificado = sequelize.define(
      "Classificados",
      {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          titulo: DataTypes.STRING,
          foto: DataTypes.STRING,
          descricao: DataTypes.STRING,
          categoria: DataTypes.STRING,
          tipo: DataTypes.STRING,
          id_morador: {
            type: DataTypes.INTEGER,
          },
          
        },
        {
        tableName:'classificados'
        }) 
      
        Classificado.associate = (listaDeModelos) => {
          Classificado.belongsTo(listaDeModelos.Moradores, {
            foreignKey: 'id_morador',
            as: 'morador'
          })
        }
  
      
    return Classificado;
  };
  