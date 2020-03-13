const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// for parsing application/json
app.use(bodyParser.json())

if (process.env.DEV) {
  const morgan = require("morgan")
  app.use(morgan("dev"))
}

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`)
})
