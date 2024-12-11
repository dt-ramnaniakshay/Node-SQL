//all the important logical functions be there
const errorHandler = require('../utils/errorHandler')
//importing a model of product
const Product = require('../models/productModel')

const getAllProducts = async(req,res) => {
    //logic for all the products
    try {
        const products = await Product.findAll();
        res.status(200).json(products)
        
    } catch (error) {
        errorHandler(res,error)
    }
}

const createAProduct = async(req,res) => {
    //logic for creating a product
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        errorHandler(res,error)
    }
}

const getAProductByID = async(req,res) => {
    //logic to get a product
    try {
        const product = await Product.findByPk(req.params.id)
        if(product){
            res.status(200).json(product)
        }else{
            res.status(404).json({message: "product not found"})
        }
    } catch (error) {
        errorHandler(res,error)
    }

}

const updateAProduct = async(req,res) => {
    //logic to update a product
    try {
        const product = await Product.findByPk(req.params.id)
        if(product){
            const updatedProduct = await product.update(req.body)
            res.status(200).json(updatedProduct)
        }else{
            res.status(404).json({message: "product not found"})
        }
        
    } catch (error) {
        errorHandler(res,error)
    }
}

const deleteAProduct = async(req,res) => {
    //logic to delete a product by id
    try {
        const product = await Product.findByPk(req.params.id)
        if(product){
            //to delte the product
            await product.destroy();
            res.status(200).json({message: "product deleted sucessfully"})
        }else{
            res.status(404).json({message: "product not found"})
        }
    } catch (error) {
        errorHandler(res,error)
    }
}

module.exports = {
    getAProductByID,
    getAllProducts,
    createAProduct,
    updateAProduct,
    deleteAProduct,
}