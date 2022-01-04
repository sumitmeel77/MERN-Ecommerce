const Product = require("../models/productModel")

//create product
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        success: true,
        product
    })
}

//get All products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    })
}

//update product
exports.UpdateProduct = async (req, res, next) => {
    let product = Product.findById(req.params.id)
    if (!product) {
        return res.status(200).json({
            success: true,
            message: "product not found"
        })
    }
    newProduct = await Product.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
            runValidators: true,
            useFindandModifiy: false
        })

    res.status(200).json({
        success: true,
        newProduct
    })
}

//deleting product
exports.DeleteProduct = async (req, res, next) => {
    let product = await Product.findByIdAndUpdate(req.params.id)
    if (!product) {
        return res.status(200).json({
            success: true,
            message: "product not found"
        })
    }
    await product.remove();

    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
}