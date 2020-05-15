module.exports = (sequelize, DataTypes) => {
  const Morador = sequelize.define(
    "Moradores",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING(45),
      cpf: DataTypes.STRING(11),
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      senha: DataTypes.STRING(245),
      foto: DataTypes.STRING(245),
      sobre: DataTypes.STRING(245),
      
      id_apartamento:{
        type: DataTypes.INTEGER,
        foreingKey: true,
      } 
      
    },
    
  )

  Morador.associate = (listaDeModelos) => {
    Morador.belongsTo(listaDeModelos.Apartamentos, {
      foreingKey: 'id_apartamentos',
      as: 'apartamento'
    })
  }

    
  return Morador;
};
