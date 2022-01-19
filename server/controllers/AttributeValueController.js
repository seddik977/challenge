const db = require("../models");
const AttributeValue = db.attributevalue;


const addAttributeValue = async (req, res) => {

    let AV = {

        Name: req.body.Name,
        Boolean: req.body.Boolean,
        Date: req.body.Date
    }

    const attributeValue = await AttributeValue.create(AV)
    res.status(200).send(attributeValue)
    console.log(attributeValue)

}


module.exports = {
    addAttributeValue

}