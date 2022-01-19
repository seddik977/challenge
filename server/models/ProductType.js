module.exports = (sequelize, DataTypes) => {

    const ProductType = sequelize.define("producttype", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        }




    })

    return ProductType

}