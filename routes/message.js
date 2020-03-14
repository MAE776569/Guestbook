const router = require("express").Router()
const isAuthenticated = require("../middlewares/isAuthenticated")
const Message = require("../models/message")
const Conversation = require("../models/conversation")

router.post("/conversation", (req, res) => {
  req.checkBody("sender", "Sender id is required").notEmpty()
  req.checkBody("receiver", "Receiver id is required").notEmpty()
  req.checkBody("text", "Conversation text is required").notEmpty()

  const error = req.validationErrors()
  if (error) return res.json({ error })

  const { sender, receiver, text } = req.body
  Message.create({ text }, (error, message) => {
    if (error) return res.json({ error: "Error creating message" })
    Conversation.create(
      { sender, receiver, message: message._id },
      (error, conv) => {
        if (error) return res.json({ error: "Error creating conversation" })
        return res.json({
          id: conv._id,
          sender: conv.sender,
          receiver: conv.receiver,
          message
        })
      }
    )
  })
})

module.exports = router
