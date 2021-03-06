const router = require("express").Router()
const isAuthenticated = require("../middlewares/isAuthenticated")
const Message = require("../models/message")
const Conversation = require("../models/conversation")

router.post("/conversation", isAuthenticated, (req, res) => {
  req.checkBody("sender", "Sender id is required").trim().notEmpty()
  req.checkBody("receiver", "Receiver id is required").trim().notEmpty()
  req.checkBody("text", "Conversation text is required").trim().notEmpty()

  const error = req.validationErrors()
  if (error) return res.json({ error })

  const { sender, receiver, text } = req.body
  Message.create({ text }, (error, message) => {
    if (error) return res.json({ error: "Error creating message" })
    Conversation.create(
      { sender, receiver, message: message._id },
      (error, conv) => {
        if (error) return res.json({ error: "Error creating conversation" })
        return res.json({ conversation: Object.assign(conv, { message }) })
      }
    )
  })
})

router.get("/conversation", isAuthenticated, (req, res) => {
  req.checkQuery("sender", "Sender is required").trim().notEmpty()
  req.checkQuery("receiver", "Receiver is required").trim().notEmpty()

  const error = req.validationErrors()
  if (error) return res.json({ error })

  const { sender, receiver } = req.query
  Conversation.find({
    $or: [
      { sender, receiver },
      { sender: receiver, receiver: sender }
    ]
  })
    .populate("message")
    .sort({ createdAt: 1 })
    .limit(10)
    .exec((error, conv) => {
      if (error) return res.json({ error: "Error getting conversations" })
      return res.json({ conversations: conv })
    })
})

router.put("/messages/:id", isAuthenticated, (req, res) => {
  req.checkParams("id", "Message id is required").trim().notEmpty()
  req.checkBody("text", "Message text is required").trim().notEmpty()

  const error = req.validationErrors()
  if (error) return res.json({ error })

  Message.findByIdAndUpdate(
    { _id: req.params.id },
    { text: req.body.text },
    { new: true },
    (error, message) => {
      if (error) return res.json({ error: "Error updating message" })
      return res.json({ message })
    }
  )
})

router.delete("/messages/:id", isAuthenticated, (req, res) => {
  req.checkParams("id", "Message id is required").trim().notEmpty()

  const error = req.validationErrors()
  if (error) return res.json({ error })

  Message.findByIdAndDelete(req.params.id, (error, message) => {
    if (error) return res.json({ error: "Error deleting message" })
    return res.json({ message })
  })
})

module.exports = router
