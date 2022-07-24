module.exports = (sequelize, DataType) => {
    const Filme = sequelize.define('Filme', {
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
        tableName: 'filmes',
        timestamps: false
    })

    return Filme
}