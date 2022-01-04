const app = require("./app")

const dotenv = require("dotenv")
dotenv.config({ path: "Backend/config/config.env" })

app.listen(
    process.env.PORT,
    () => {
        console.log(`successfully started on port ${process.env.PORT}`)
    }
)