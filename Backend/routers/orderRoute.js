const express = require("express")
const { NewOrder, getSingleOrder, userOrders, getAllOrders, UpdateOrder, RemoveOrder } = require("../controllers/orderController")
const { AuthenticatedUser, AutheriosedRole } = require("../middleware/auth")
const router = express.Router()

router.route("/order/new").post(AuthenticatedUser, NewOrder) //api for creating new order

router.route("/order/UserOrder").get(AuthenticatedUser, userOrders) //api  to see all order crosspending to user

router.route("/order/:id").get(AuthenticatedUser, AutheriosedRole("admin"), getSingleOrder) //api  to see order detail

router.route("/order/AllOrder").get(AuthenticatedUser, AutheriosedRole("admin"), getAllOrders) //api  to see all order and total amount

router.route("/order/UpdateOrder/:id").put(AuthenticatedUser, AutheriosedRole("admin"), UpdateOrder) //api  to update order

router.route("/order/RemoveOrder/:id").delete(AuthenticatedUser, AutheriosedRole("admin"), RemoveOrder) //api  to remove order

module.exports = router