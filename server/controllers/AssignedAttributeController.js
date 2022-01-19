const db = require("../models");
const AssignedAttribute = db.assignedattribute;


const addAssignedAttribute = async (req, res) => {

    let AA = {

        attributevalue_id: req.body.attributevalue_id,
        product_id: req.body.product_id,


    }
    try {
        const assignedAttribute = await AssignedAttribute.create(AA)
        res.status(200).send(assignedAttribute)
        console.log(assignedAttribute)

    } catch (err) {
        res.status(400).send(err)
        console.log(err)
    }


}


module.exports = {
    addAssignedAttribute

}