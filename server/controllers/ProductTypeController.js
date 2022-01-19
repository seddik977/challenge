const db = require("../models");
const ProductType = db.producttype;
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "DBreleasin"
});

const addProductType = async (req, res) => {

    let AA = {

        Name: req.body.Name,

    }
    try {
        const PT = await ProductType.create(AA)
        res.status(200).send(PT)
        console.log(PT)

    } catch (err) {
        res.status(400).send(err)
        console.log(err)
    }


}
const getProductType = async (req, res) => {

    let id = req.params.id
    let product = await ProductType.findOne({ where: { id: id } })
    res.status(200).send(product)

}
const getAllProductsTypes = async (req, res) => {




    con.connect(function (err) {

        con.query("SELECT Name ,id FROM producttypes ", function (err, result, fields) {
            if (err) throw err;
            res.status(200).send(result)
        });
    });
}



module.exports = {
    addProductType,
    getProductType,
    getAllProductsTypes

}