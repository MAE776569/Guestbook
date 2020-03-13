const router = require("express").Router()
const authenticateUser = require("../middlewares/authentication")
const Session = require("../models/session")

router.post("/login", (req, res) => {
  req.checkBody("username", "Username is required").notEmpty()
  req.checkBody("password", "Password is required").notEmpty()
  req
    .checkBody("username", "Username consists only of alpha numerics")
    .isAlphanumeric()

  const errors = req.validationErrors()
  if (errors) return res.json({ errors })

  const { username, password } = req.body
  authenticateUser(username, password, (error, userID) => {
    if (error) {
      console.log(error)
      return res.json({ error: error.message })}

    if (userID) {
      Session.create({ user: userID }, (error, session) => {
        if (error) throw error
        return res.json({ sessionID: session._id })
      })
    }
  })
})

module.exports = router
