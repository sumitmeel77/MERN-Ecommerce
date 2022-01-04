const app = require("./app")
const connectDatabase = require("./database/database")

//importing env file
const dotenv = require("dotenv")
dotenv.config({ path: "Backend/config/config.env" })

// database function
connectDatabase()

app.listen(
    process.env.PORT,
    () => {
        console.log(`successfully started on port ${process.env.PORT}`)
    }
)