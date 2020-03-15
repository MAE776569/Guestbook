import React, { useState } from "react"

// Controlled component for message input
function MessageForm({ sendMessage }) {
  const [message, setMessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(message)
    setMessage("")
  }

  return (
    <div className="d-flex flex-nowrap message-form">
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="input-group">
          <textarea
            className="message-form__input"
            placeholder="Enter Your Message"
            spellCheck={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-primary">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MessageForm
