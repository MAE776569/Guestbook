import React from "react"
import MessageForm from "./MessageForm"

function Messages() {
  return (
    <>
      <ul className="list-unstyled">
        <li>Select User to start conversation</li>
      </ul>
      <MessageForm />
    </>
  )
}

export default Messages
