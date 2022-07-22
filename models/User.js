module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        id: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {                                          
            type: DataType.STRING(50),
            allowNull: false
        },

        email: {
            type: DataType.STRING(50),
            allowNull: false
        }

    }, {
        tableName: 'users',
        timestamps: false
    })

    return User
}