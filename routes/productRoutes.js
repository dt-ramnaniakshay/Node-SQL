const express = require('express')
const { 
    getAProductByID,
    getAllProducts,
    createAProduct,
    updateAProduct,
    deleteAProduct,
    
} = require('../controllers/productController')

const router = express.Router();


router
    .get('/',getAllProducts)
    .post('/',createAProduct)

router
    .get('/:id',getAProductByID)
    .put('/:id', updateAProduct)
    .delete('/:id', deleteAProduct)

module.exports = router