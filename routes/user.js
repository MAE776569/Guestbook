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

  const error = req.validationErrors()
  if (error) return res.json({ error })

  const { username, password } = req.body
  authenticateUser(username, password, (error, user) => {
    if (error) return res.json({ error: error.message })
    else if (user) {
      Session.create({ user: user }, (error, session) => {
        if (error) return res.json({ error })
        return res.cookie("SID", session._id, { signed: true }).json({
          id: user._id,
          name: user.name,
          username: user.username
        })
      })
    }
  })
})

router.post("/logout", isAuthenticated, (req, res) => {
  const sessionID = req.signedCookies["SID"]
  Session.deleteOne({ _id: sessionID }, (error, session) => {
    if (error) return res.json({ error: "Error deleting session" })
    return res.clearCookie("SID").json({ success: { sessionID } })
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

  const error = req.validationErrors()
  if (error) return res.json({ error })

  const { name, username, password } = req.body
  User.create(
    {
      name,
      username,
      password
    },
    (error, user) => {
      if (error) return res.json({ error: "Error creating new user" })
      Session.create({ user: user._id }, (error, session) => {
        if (error) res.json({ error: "Error creating new session" })
        return res.cookie("SID", session._id, { signed: true }).json({
          id: user._id,
          name: user.name,
          username: user.username
        })
      })
    }
  )
})

router.get("/me", (req, res) => {
  const sessionID = req.signedCookies["SID"]
  if (sessionID) {
    Session.findById(sessionID).populate("user")
    .exec((error, session) => {
      if(error) return res.json({ error: "Error getting session" })

      return res.json({
        id: session.user._id,
        name: session.user.name,
        username: session.user.username
      })
    })
  }
  else
    return res.status(401).json({ error: "Not autheticated" })
})

router.get("/users", isAuthenticated, (req, res) => {
  User.find({}, (error, users) => {
    if (error) return res.json({ error: "Error fetching users" })
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
