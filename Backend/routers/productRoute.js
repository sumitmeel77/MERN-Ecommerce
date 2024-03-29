const express = require("express")
const { getAllProducts, getAdminProducts , createProduct, UpdateProduct, DeleteProduct, getProductDetail, ProductReview, AllReview } = require("../controllers/productControllers")
const { AuthenticatedUser, AutheriosedRole } = require("../middleware/auth")

const router = express.Router()

router.route("/products").get(getAllProducts)//api for getting all product

router.route("/admin/products").get(AuthenticatedUser, AutheriosedRole("admin"), getAdminProducts)//api for getting all product for admin

router.route("/admin/product/new").post(AuthenticatedUser, AutheriosedRole("admin"), createProduct) // api for creating new product

router.route("/admin/product/update/:id").put(AuthenticatedUser, AutheriosedRole("admin"), UpdateProduct)// api for updating product

router.route("/admin/product/delete/:id").delete(AuthenticatedUser, AutheriosedRole("admin"), DeleteProduct)// api for deleting product

router.route("/product/get/:id").get(getProductDetail)// api for getting product detail

router.route("/product/review").put(AuthenticatedUser, ProductReview)// api for review

router.route("/product/AllReviews").get(AllReview)// api for for all review


module.exports = router