import React from "react"
import Message from "./Message"

function Messages({ messages }) {
  if (messages === undefined)
    return (
      <div className="unselected-message-list d-flex justify-content-center align-items-center">
        Select User to start conversation
      </div>
    )

  else if (messages.length === 0)
    return (
      <div className="empty-message-list d-flex justify-content-center align-items-center">
        No messages!
      </div>
    )

  return (
    <ul className="list-unstyled px-3 pt-2">
      <Message />
    </ul>
  )
}

export default Messages
