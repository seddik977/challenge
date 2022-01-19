module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },




    })

    return Product

}