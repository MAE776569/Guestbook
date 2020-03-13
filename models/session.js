const mongoose = require("mongoose")

const Session = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    expiresAt: {
      type: Date,
      default: () => {
        let week = new Date()
        week.setDate(week.getDate() + 7)
        return week
      }
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("session", Session)
