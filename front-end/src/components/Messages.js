import React from "react"

function Messages({ messages }) {
  console.log(messages)

  if (messages === undefined)
    return (
      <div className="empty-message-list d-flex justify-content-center align-items-center">
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
    <ul className="list-unstyled">
      <li>To show messages</li>
    </ul>
  )
}

export default Messages
