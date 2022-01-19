const AttributeValueController = require('../controllers/AttributeValueController.js');


const router = require('express').Router()

router.post('/', AttributeValueController.addAttributeValue)
module.exports = router