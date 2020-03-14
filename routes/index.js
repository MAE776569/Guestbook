const router = require("express").Router()
const userRouter = require("./user")
const messagesRouter = require("./message")

router.use("/", userRouter)
router.use("/", messagesRouter)

module.exports = router