const Product = require("../models/productModel")
const ErrorHander = require("../utils/errorHandler")
const catchAsyncError = require("../middleware/catchAsyncError")
const apiFeatures = require("../utils/apiFeatures")
//create product
exports.createProduct = catchAsyncError(
    async (req, res, next) => {
        const product = await Product.create(req.body)
        res.status(200).json({
            success: true,
            product
        })
    }
)
//get All products
exports.getAllProducts = catchAsyncError(

    async (req, res) => {
        const resultPerPage = 10
        const productCount = await Product.countDocuments() // method for calcualtion count of product

        const apiFeature = new apiFeatures(Product.find(), req.query).serach().filter().pagination(resultPerPage)

        const products = await apiFeature.query
        res.status(200).json({
            success: true,
            products,
            productCount
        })
    }
)

//get product detail
exports.getProductDetail = catchAsyncError(
    async (req, res, next) => {
        const product = await Product.findById(req.params.id)

        if (!product) {
            // return res.status(200).json({
            //     success: true,
            //     message: "product not found"
            // })
            return next(new ErrorHander("product not found", 404))
        }

        res.status(200).json({
            success: true,
            product
        })
    }
)

//update product
exports.UpdateProduct = catchAsyncError(
    async (req, res, next) => {
        let product = Product.findById(req.params.id)
        if (!product) {
            return next(new ErrorHander("product not found", 404))
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
)

//deleting product
exports.DeleteProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findByIdAndUpdate(req.params.id)
    if (!product) {
        return next(new ErrorHander("product not found", 404))
    }
    await product.remove();

    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
})


