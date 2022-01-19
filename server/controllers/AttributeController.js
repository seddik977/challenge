const db = require("../models");
const Attribute = db.attribute;


const addAttribute = async (req, res) => {

    let AA = {
        Name: req.body.Name,
        Type: req.body.Type,
        attributevalue_id: req.body.attributevalue_id,
        producttypeId: req.body.producttypeId,

    }
    try {
        const attr = await Attribute.create(AA)
        res.status(200).send(attr)
        console.log(attr)

    } catch (err) {
        res.status(400).send(err)
        console.log(err)
    }


}


module.exports = {
    addAttribute

}