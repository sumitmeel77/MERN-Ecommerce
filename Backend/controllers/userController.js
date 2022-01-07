const ErrorHandler = require("../utils/errorHandler")
const catchAsyncError = require("../middleware/catchAsyncError")
const User = require("../models/userModels");
const sendToken = require("../utils/jwtToken");

exports.registerUser = catchAsyncError(
    async (req, res, next) => {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password,
            ProfilePhoto: {
                public_id: "some id",
                url: "some url",
            },
        });
        // const token = user.getJwtToken()
        // res.status(201).json({
        //     success: true,
        //     token
        // })
        sendToken(user, 201, res)
    }
)

exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    // checking if user has given password and email both

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(user, 201, res)
});

exports.logoutUser = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
});