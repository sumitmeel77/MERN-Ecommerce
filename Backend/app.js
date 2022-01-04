const express = require("express")

const errorHandler = require("./middleware/error")

const app = express()
app.use(express.json())

//importing routes
const product = require("./routers/productRoute")
app.use("/api", product)

// middleware for error
app.use(errorHandler)

module.exports = app