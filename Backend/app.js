const express = require("express")

const app = express()
app.use(express.json())

//importing routes
const product = require("./routers/productRoute")
app.use("/api", product)

module.exports = app