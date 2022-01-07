const express = require("express")
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword } = require("../controllers/userController")

const router = express.Router()

router.route("/user/register").post(registerUser) // api for registering new User

router.route("/user/login").post(loginUser) // api for login user

router.route("/user/logout").get(logoutUser) // api for logout user

router.route("/user/forgotPassword").post(forgotPassword) // api for forgot password

router.route("/user/resetPassword/:token").put(resetPassword) // api for reset password

module.exports = router