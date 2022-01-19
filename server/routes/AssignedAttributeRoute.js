const AssignedAttributeController = require('../controllers/AssignedAttributeController.js');


const router = require('express').Router()

router.post('/', AssignedAttributeController.addAssignedAttribute)
module.exports = router