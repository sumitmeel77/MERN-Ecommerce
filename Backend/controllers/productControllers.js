const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncError = require("../middleware/catchAsyncError")
const apiFeatures = require("../utils/apiFeatures")
//create product
exports.createProduct = catchAsyncError(

    async (req, res, next) => {

        req.body.user = req.user.id // for adding which admin created product

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
            return next(new ErrorHandler("product not found", 404))
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
            return next(new ErrorHandler("product not found", 404))
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
        return next(new ErrorHandler("product not found", 404))
    }
    await product.remove();

    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
})

//create new review and upadate review

exports.ProductReview = catchAsyncError(
    async (req, res, next) => {
        const review = {
            user: req.user._id,
            name: req.user.name,
            rating: Number(req.body.rating),
            comment: req.body.comment,

        }
        const product = await Product.findById(req.body.ProductId)

        //condition to check whether review is present or not
        const isReviewd = product.reviews.find(entry => entry.user.toString() === req.user._id.toString())

        if (isReviewd) {
            product.reviews.forEach((rev) => {
                if (rev.user.toString() === req.user._id.toString())
                    (rev.rating = req.body.rating), (rev.comment = req.body.comment);
            });
        } else {
            product.reviews.push(review);
            product.numOfReviews = product.reviews.length;
        }

        let avg = 0;
        //to find average of reviews
        product.reviews.forEach((rev) => {
            avg += rev.rating;
        });

        product.ratings = avg / product.reviews.length;

        await product.save({ validateBeforeSave: false });

        res.status(200).json({
            success: true,
        });
    }
)

// to see all reviews of a product

exports.AllReview = catchAsyncError(
    async (req, res, next) => {

        const product = await Product.findById(req.query.id)

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        res.status(200).json({
            success: true,
            reviews: product.reviews,
        });
    }
)

// api to delete review for future


