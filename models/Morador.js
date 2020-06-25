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
      senha: {
        type: DataTypes.STRING(245),
        select: false,
      },
      senhaTemporaria: {
        type: DataTypes.STRING,
      },
      senhaTemporariaExpira: {
        type: DataTypes.DATE,
      },
      foto: DataTypes.STRING(245),
      sobre: DataTypes.STRING(245),
      interesses: {
        type: DataTypes.STRING(245),
      },
      admin: {
        type: DataTypes.BOOLEAN,
      },
      dataNascimento: DataTypes.DATEONLY,
      id_apartamento: {
        type: DataTypes.INTEGER,
      }
      // id_apartamento:{
      //   type: DataTypes.INTEGER,
      //   foreingKey: true,
      // } 
      
    },{
      tableName:'moradores'
      
      })

  Morador.associate = (models) => {
    Morador.hasMany(models.Solicitacao, {
      as: 'solicitacao'
    })
  }

  Morador.associate = (listaDeModelos) => {
    Morador.belongsTo(listaDeModelos.Apartamentos, {
      foreignKey: 'id_apartamento',
      as: 'apartamento'
    })
  }

    
  return Morador;
};
