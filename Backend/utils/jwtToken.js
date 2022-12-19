
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + 2 * 24 * 60 * 60 * 1000
        ),
        // httpOnly: true,
    };

    console.log("jwtToken")
    console.log(token)
    
    res.cookie("token", token, options);
    // console.log("resresressssssss")
    // console.log(res)
    res.status(statusCode).json({
        success: true,
        user,
        token,
    });
};

module.exports = sendToken;