module.exports = (sequelize, DataTypes) => {
  const Solicitacao = sequelize.define(
    "Solicitacoes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      data: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM,
        values: ['Pendente','Indeferida','Deferida'],
        allowNull: false,
      },
      descricao: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      comentarios: {
        type: DataTypes.STRING(250),
      },
      id_morador: {
        type: DataTypes.INTEGER,
      },
  })

  Solicitacao.associate = (models) => {
    Solicitacao.belongsTo(models.Moradores, {
      foreignKey: 'id_morador',
      as: 'morador',
    })
  }

  return Solicitacao;
};