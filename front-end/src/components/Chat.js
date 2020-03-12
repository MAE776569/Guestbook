import React from "react"
import NavBar from "./NavBar"
import UsersList from "./UsersList"

/* The main page consists of two section:
messages to view and CRUD messages
users to search and select users to their messages */
function Chat() {
  return (
    <>
      <NavBar />
      <div className="container pt-1 chat">
        <div className="row px-3">
          <div className="col-12 col-md-6 col-lg-8 order-1 ordre-md-0 messages-section">
            chat
          </div>
          <div className="col-12 col-md-6 col-lg-4 order-0 order-md-1 users-section">
            <UsersList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
