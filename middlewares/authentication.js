const User = require("../models/user")

function authenticateUser(username, password, callback) {
  User.findOne({ username }).then((error, user) => {
    if (error) return callback(error, null)
    else if (user) {
      user.comparePassword(password, (result) =>
        result
          ? callback(null, user._id)
          : callback(new Error("Incorrect username or password"), user._id)
      )
    } else callback(new Error("Incorrect username or password"), null)
  })
}

module.exports = authenticateUser
