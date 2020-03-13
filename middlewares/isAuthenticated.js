const Session = require("../models/session")

async function isAuthenticated(req, res, next) {
  const sessionID = req.cookies["SID"]
  if (sessionID) {
    const session = await Session.findById(sessionID)
    if (session) return next()
  }

  return res.status(401).json({ error: "Not autheticated" })
}

module.exports = isAuthenticated
