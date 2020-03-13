const mongoose = require("mongoose")

const Conversation = mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  message: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Message"
  }
}, { timestamps: true })

module.exports = mongoose.model("conversation", Conversation)