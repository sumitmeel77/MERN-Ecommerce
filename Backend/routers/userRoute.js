const express = require("express")
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetail, UpdateUserPassword, UpdateProfile } = require("../controllers/userController")
const { AuthenticatedUser } = require("../middleware/auth")

const router = express.Router()

router.route("/user/register").post(registerUser) // api for registering new User

router.route("/user/login").post(loginUser) // api for login user

router.route("/user/logout").get(logoutUser) // api for logout user

router.route("/user/forgotPassword").post(forgotPassword) // api for forgot password

router.route("/user/resetPassword/:token").put(resetPassword) // api for reset password

router.route("/user/getDetail").get(AuthenticatedUser, getUserDetail) // api for get User Detail

router.route("/user/UpdatePassword").post(AuthenticatedUser, UpdateUserPassword) // api for update password

router.route("/user/UpdateProfile").post(AuthenticatedUser, UpdateProfile) // api for update profile

module.exports = router