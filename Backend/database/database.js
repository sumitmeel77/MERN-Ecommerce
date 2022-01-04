const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect(process.env.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log("connection successfull with database") }).catch((err) => console.log(err))
}


module.exports = connectDatabase