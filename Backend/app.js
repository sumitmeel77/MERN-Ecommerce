const express = require("express")
const errorHandler = require("./middleware/error")
const cookieParser = require("cookie-parser")
var cors = require('cors');

const app = express()
app.use(express.json())

const corsOptions = {
    credentials: true,
  };

app.use(cors(corsOptions));

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