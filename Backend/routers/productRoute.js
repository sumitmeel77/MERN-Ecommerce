const express = require("express")
const { getAllProducts, createProduct, UpdateProduct, DeleteProduct, getProductDetail } = require("../controllers/productControllers")

const router = express.Router()

router.route("/products").get(getAllProducts)//api for getting all product

router.route("/product/new").post(createProduct) // api for creating new product

router.route("/product/:id").put(UpdateProduct)// api for updating product

router.route("/product/:id").delete(DeleteProduct)// api for deleting product

router.route("/product/:id").get(getProductDetail)// api for getting product detail

module.exports = router