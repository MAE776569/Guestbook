import React from "react"
import Message from "./Message"

function Messages({
  messages,
  loggedUserID,
  deleteMessage,
  setUpdatedMessage
}) {
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
    <ul className="list-unstyled px-3 pt-2">
      {messages.map((message) => (
        <Message
          key={message.id}
          conversation={message}
          loggedUserID={loggedUserID}
          deleteMessage={deleteMessage}
          setUpdatedMessage={setUpdatedMessage}
        />
      ))}
    </ul>
  )
}

export default Messages
