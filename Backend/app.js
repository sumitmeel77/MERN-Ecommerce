const express = require("express")
const errorHandler = require("./middleware/error")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())

app.use(cookieParser())
//importing routes
const product = require("./routers/productRoute")
app.use("/api", product)

const user = require("./routers/userRoute")
app.use("/api", user)

const order = require("./routers/orderRoute")
app.use("/api", order)

// middleware for error
app.use(errorHandler)

module.exports = app