const ErrorHandler = require("../utils/errorHandler")
const catchAsyncError = require("../middleware/catchAsyncError")
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

exports.AuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    console.log("token")
    console.log(token)
    if (!token) {
        return next(new ErrorHandler("Please Login to access ", 401));
    }
    console.log("secret")
    console.log(process.env.JWT_SECRET)
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id); //Imp concept to store user profile 

    next();
});
exports.AutheriosedRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(`${req.user.role} is not allowed to access this data`, 403)
            )
        }
        next()
    }

}
