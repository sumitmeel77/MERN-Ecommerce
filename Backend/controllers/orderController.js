const Order = require("../models/orderModel")
const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncError = require("../middleware/catchAsyncError")

exports.NewOrder = catchAsyncError(
    (req, res, next) => {
        const {
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;

        const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt: Date.now(),
            user: req.user._id,
        });

        res.status(201).json({
            success: true,
            order,
        });
    }
)

// all order crosspending to user
exports.userOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id }); // passing query to search product with login user id

    res.status(200).json({
        success: true,
        orders,
    });
});

// get Order detail for admin
exports.getSingleOrder = catchAsyncError(
    async (req, res, next) => {
        //populate method used to find user name and email from user database from userId.
        const order = await Order.findById(req.params.id).populate(
            "user",
            "name email"
        );

        if (!order) {
            return next(new ErrorHandler("Order not found with this Id", 404));
        }

        res.status(200).json({
            success: true,
            order,
        });
    });

// get all Orders and total amount -- Admin
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find();

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    });

    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    });
});

// update order sataus -- Admin
exports.UpdateOrder = catchAsyncError(
    async (req, res, next) => {

        const order = await Order.findById(req.params.id);

        if (!order) {
            return next(new ErrorHandler("Order not found with this Id", 404));
        }

        if (order.orderStatus === "Delivered") {
            return next(new ErrorHandler("You have already delivered this order", 400));
        }

        if (req.body.status === "Shipped") {
            order.orderItems.forEach(async (value) => {
                await updateStock(value.product, value.quantity);
            });
        }
        order.orderStatus = req.body.status;

        if (req.body.status === "Delivered") {
            order.deliveredAt = Date.now();
        }

        await order.save({ validateBeforeSave: false });

        res.status(200).json({
            success: true,
        });
    });

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.Stock -= quantity;

    await product.save({ validateBeforeSave: false });
}

// Delete order -- Admin
exports.RemoveOrder = catchAsyncError(
    async (req, res, next) => {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return next(new ErrorHandler("Order not found with this Id", 404));
        }

        await order.remove();

        res.status(200).json({
            success: true,
        });
    });
