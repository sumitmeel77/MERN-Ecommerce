const express = require("express")
const { getAllProducts, createProduct, UpdateProduct, DeleteProduct, getProductDetail } = require("../controllers/productControllers")
const { AuthenticatedUser, AutheriosedRole } = require("../middleware/auth")

const router = express.Router()

router.route("/products").get(getAllProducts)//api for getting all product

router.route("/product/new").post(AuthenticatedUser, AutheriosedRole("admin"), createProduct) // api for creating new product

router.route("/product/:id").put(AuthenticatedUser, AutheriosedRole("admin"), UpdateProduct)// api for updating product

router.route("/product/:id").delete(AuthenticatedUser, AutheriosedRole("admin"), DeleteProduct)// api for deleting product

router.route("/product/:id").get(getProductDetail)// api for getting product detail

module.exports = router