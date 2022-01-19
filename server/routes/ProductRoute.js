const ProductController = require('../controllers/ProductController.js');


const router = require('express').Router()

router.post('/', ProductController.addProduct)
router.get('/', ProductController.getAllProducts)
router.put('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router