const { product } = require("../models");
const db = require("../models");
const Product = db.product;

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "DBreleasin"
});

const addProduct = async (req, res) => {

    let AA = {

        Name: req.body.Name,
        productType_id: req.body.productType_id,

    }
    try {
        const P = await Product.create(AA)
        res.status(200).send(P)
        console.log(P)

    } catch (err) {
        res.status(400).send(err)
        console.log(err)
    }


}
const getAllProducts = async (req, res) => {




    con.connect(function (err) {

        con.query("SELECT pr.id as id,pr.Name as Name,pt.Name as ProductType FROM products pr join producttypes pt on pr.productType_id =pt.id", function (err, result, fields) {
            if (err) throw err;
            res.status(200).send(result)
        });
    });
}
const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Product.update(req.body, { where: { id: id } })

    res.status(200).send(...Product)


}
const deleteProduct = async (req, res) => {

    let id = req.params.id

    await Product.destroy({ where: { id: id } })

    res.status(200).send('Product is deleted !')

}

module.exports = {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct


}