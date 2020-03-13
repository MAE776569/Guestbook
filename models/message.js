const mongoose = require("mongoose")

const Message = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model("message", Message)