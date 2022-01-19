const ProductTypeController = require('../controllers/ProductTypeController.js');


const router = require('express').Router()

router.post('/', ProductTypeController.addProductType)
router.get('/:id', ProductTypeController.getProductType)
router.get('/', ProductTypeController.getAllProductsTypes)
module.exports = router