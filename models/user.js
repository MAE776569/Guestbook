const mongoose = require("mongoose")
const Bcrypt = require("bcrypt")

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

// encrypting the password before saving
User.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next()
  }
  this.password = Bcrypt.hashSync(this.password, 10)
  next()
})

// Method for comparing passwords
User.methods.comparePassword = function(plainPassword, callback) {
  return callback(null, Bcrypt.compareSync(plainPassword, this.password))
}

module.exports = mongoose.model("User", User)
