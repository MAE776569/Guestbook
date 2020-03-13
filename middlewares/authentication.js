const User = require("../models/user")

function authenticateUser(username, password, callback) {
  User.findOne({ username }).then((user, error) => {
    if (error) return callback(error, null)
    else if (user) {
      user.comparePassword(password, (result) =>
        result
          ? callback(null, user._id)
          : callback(new Error("Incorrect username or password"), null)
      )
    } else callback(new Error("Incorrect username or password"), null)
  })
}

module.exports = authenticateUser
