module.exports = (sequelize, DataTypes) => {
    const Correspondencia = sequelize.define(
      "Correspondencias",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        tipo:{ 
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      
        destinatario: DataTypes.STRING,

        apartamento: DataTypes.STRING,

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
   
      
      })


  
      
    return Correspondencia;
  };
  