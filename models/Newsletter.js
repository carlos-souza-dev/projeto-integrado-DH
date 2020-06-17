module.exports = (sequelize, DataTypes) => {
    const Newsletter = sequelize.define(
      "Newsletter",
        {
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            },
            email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            }
        }, 
        {
            tableName: 'newsletter',
        })

    return Newsletter;
}