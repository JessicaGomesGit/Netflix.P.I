module.exports = (sequelize, DataType) => {
    const Serie = sequelize.define('Serie', {
        id: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {                                          
            type: DataType.STRING(50),
            allowNull: false
        },

        rating: {
            type: DataType.STRING(50),
            allowNull: false
        },

        awards: {
            type: DataType.STRING(50),
            allowNull: false
        }, 

        release_date: {
            type: DataType.STRING(50),
            allowNull: false
        },

        length : {
            type: DataType.STRING(50),
            allowNull: false
        }



    }, {
        tableName: 'series',
        timestamps: false
    })

    return Serie
}