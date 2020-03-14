import React from "react"
import NavBar from "./NavBar"
import SearchUsers from "./SearchUsers"
import UsersList from "./UsersList"
import Messages from "./Messages"
import { connectStore } from "../store"
import { withRouter, Redirect } from "react-router-dom"

/* The main page consists of two section:
messages to view and CRUD messages
users to search and select users to their messages */
function Chat(props) {
  if (!props.loggedUser) return <Redirect to="/login" />

  return (
    <>
      <NavBar />
      <div className="container pt-1 chat">
        <div className="row px-3">
          <div className="col-12 col-md-6 col-lg-8 order-1 ordre-md-0 messages-section">
            <Messages />
          </div>
          <div className="col-12 col-md-6 col-lg-4 order-0 order-md-1 users-section">
            <SearchUsers />
            <UsersList />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(connectStore(Chat))
