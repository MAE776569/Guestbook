const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const expressValidator = require("express-validator")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const router = require("./routes")
require("dotenv").config()

const DB_URL = `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`
mongoose.connect(DB_URL)
const db = mongoose.connection
db.on("error", (error) =>
  console.error("Error connecting to the database", error)
)
db.once("open", () => {
  console.log("Connected correctly to the database")
})

// for parsing application/json
app.use(bodyParser.json())
app.use(cookieParser(process.env.APP_SECRET));
app.use(expressValidator())
app.use(router)

if (process.env.DEV) {
  const morgan = require("morgan")
  app.use(morgan("dev"))
}

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`)
})
