module.exports = (sequelize, DataTypes) => {
    const Visita = sequelize.define(
      "Visitas",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        phone: DataTypes.STRING(45),
        CEP: DataTypes.STRING(45),
        logradouro: DataTypes.STRING(100),
        numero: DataTypes.STRING(45),
        complemento: DataTypes.STRING(45),
        bairro: DataTypes.STRING(45),
        cidade: DataTypes.STRING(45),
        estado: DataTypes.STRING(45),
        condominio: DataTypes.STRING(45),
        porte: DataTypes.STRING(45),
    })

    return Visita;
}

// CEP, 
// logradouro, 
// numero, 
// complemento, 
// bairro, 
// cidade, 
// estado, 
// condominio, 
// tamanhoCondo

