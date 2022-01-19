module.exports = (sequelize, DataTypes) => {

    const Attribute = sequelize.define("attribute", {

        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Type: {
            type: DataTypes.STRING,
            allowNull: false
        }



    })

    return Attribute

}