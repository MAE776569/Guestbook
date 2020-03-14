const router = require("express").Router()
const authenticateUser = require("../middlewares/authentication")
const Session = require("../models/session")
const User = require("../models/user")
const isAuthenticated = require("../middlewares/isAuthenticated")

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
    if (error) return res.json({ error: error.message })
    else if (userID) {
      Session.create({ user: userID }, (error, session) => {
        if (error) return res.json({ error })
        return res.json({
          sessionID: session._id,
          userID: user._id,
          name: user.name,
          username: user.username
        })
      })
    }
  })
})

router.post("/logout", (req, res) => {
  req.checkBody("sessionID", "Session Id is required").notEmpty()

  const errors = req.validationErrors()
  if (errors) return res.json({ errors })

  Session.deleteOne({ _id: req.body.sessionID }, (error, session) => {
    if (error) return res.json({ error })
    return res.json({ success: { sessionID } })
  })
})

router.post("/signup", (req, res) => {
  req.checkBody("name", "Name is required").notEmpty()
  req.checkBody("name", "Name consists only of letters").isAlpha()
  req.checkBody("username", "Username is required").notEmpty()
  req.checkBody("password", "Password is required").notEmpty()
  req
    .checkBody("username", "Username consists only of alpha numerics")
    .isAlphanumeric()
  req.checkBody("c-password", "Passwords must match").equals("password")

  const errors = req.validationErrors()
  if (errors) return res.json({ errors })

  const { name, username, password } = req.body
  User.create(
    {
      name,
      username,
      password
    },
    (error, user) => {
      if (error) return res.json({ error })
      Session.create({ user: user._id }, (error, session) => {
        if (error) throw error
        return res.json({
          sessionID: session._id,
          userID: user._id,
          name: user.name,
          username: user.username
        })
      })
    }
  )
})

router.get("/users", isAuthenticated, (req, res) => {
  User.find({}, (error, users) => {
    if (error) return res.json({ error: error.message })
    return res.json({
      users: users.map((user) => ({
        id: user._id,
        name: user.name,
        username: user.username
      }))
    })
  })
})

module.exports = router