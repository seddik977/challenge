const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle

    }
}
)

sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error' + err)
    })


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.attributevalue = require('./AttributeValue.js')(sequelize, DataTypes)
db.product = require('./productModel.js')(sequelize, DataTypes)
db.attribute = require('./Attribute.js')(sequelize, DataTypes)
db.assignedattribute = require('./AssignedAttribute.js')(sequelize, DataTypes)
db.producttype = require('./ProductType.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log(' re-sync done')
    })

// one to one 
db.assignedattribute.belongsTo(db.attributevalue, { foreignKey: 'attributevalue_id', targetKey: 'id' });
db.attributevalue.hasOne(db.assignedattribute, { foreignKey: 'attributevalue_id', targetKey: 'id' });


db.attribute.belongsTo(db.attributevalue, { foreignKey: 'attributevalue_id', targetKey: 'id' });
db.attributevalue.hasOne(db.attribute, { foreignKey: 'attributevalue_id', targetKey: 'id' });

// one to many

db.producttype.hasMany(db.attribute, {
    as: 'attributes'
})

db.attribute.belongsTo(db.producttype, {
    foreignKey: 'producttypeId',
    as: 'producttype'
})



db.product.belongsTo(db.producttype, { foreignKey: 'productType_id', targetKey: 'id' });
db.producttype.hasOne(db.product, { foreignKey: 'productType_id', targetKey: 'id' });

db.product.hasMany(db.assignedattribute, {
    as: 'assignedattributes'
})

db.assignedattribute.belongsTo(db.product, {
    foreignKey: 'product_id',
    as: 'product'
})




module.exports = db