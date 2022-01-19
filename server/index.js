const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hello releasin");
})


const AVrouter = require('./routes/AssignedValueRoute');
const AArouter = require('./routes/AssignedAttributeRoute');
const Arouter = require('./routes/AttributeRoute');
const PTrouter = require('./routes/ProductTypeRoute');
const Prouter = require('./routes/ProductRoute');
app.use('/api/assignedvalue', AVrouter)
app.use('/api/assignedattribute', AArouter)
app.use('/api/attribute', Arouter)
app.use('/api/producttype', PTrouter)
app.use('/api/product', Prouter)
app.listen(5000, () => {
    console.log("server is running");
})