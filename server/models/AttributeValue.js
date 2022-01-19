module.exports = (sequelize, DataTypes) => {

    const AtrributeValue = sequelize.define("attributevalue", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Boolean: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Date: {
            type: DataTypes.STRING,

        }


    })

    return AtrributeValue

}