const AttributeController = require('../controllers/AttributeController.js');


const router = require('express').Router()

router.post('/', AttributeController.addAttribute)
module.exports = router