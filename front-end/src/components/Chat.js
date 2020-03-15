import React, { Component } from "react"
import NavBar from "./NavBar"
import SearchUsers from "./SearchUsers"
import UsersList from "./UsersList"
import Messages from "./Messages"
import MessageForm from "./MessageForm"
import UpdateModal from "./UpdateModal"
import { connectStore } from "../store"
import { withRouter, Redirect } from "react-router-dom"
import {
  getUsers,
  getConversation,
  createConversation,
  deleteMessage,
  updateMessage
} from "../utils/API"

/* The main page consists of two section:
messages to view and CRUD messages
users to search and select users to their messages */
class Chat extends Component {
  state = {
    users: [],
    searchedQuery: "",
    activeUserID: "",
    conversations: {},
    showModal: false,
    updatedMessage: null
  }

  componentDidMount() {
    getUsers()
      .then((res) => {
        if (!res.error) this.setState({ users: res.users })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleSearchUsers = (searchedQuery) => {
    this.setState({ searchedQuery })
  }

  handleSetActiveUser = (userID) => {
    const { loggedUser } = this.props
    const { conversations } = this.state

    this.setState({ activeUserID: userID })

    if (!conversations[userID]) {
      getConversation(loggedUser.id, userID)
        .then((res) => {
          if (!res.error) {
            this.setState((prevState) => {
              return {
                conversations: {
                  ...prevState.conversations,
                  [userID]: res.conversations
                }
              }
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  handleSendMessage = (message) => {
    const { activeUserID } = this.state
    const { loggedUser } = this.props

    createConversation({
      sender: loggedUser.id,
      receiver: activeUserID,
      text: message
    })
      .then((res) => {
        if (!res.error) {
          this.setState((prevState) => {
            return {
              conversations: {
                ...prevState.conversations,
                [activeUserID]: [...prevState.conversations[activeUserID], res]
              }
            }
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleDeleteMessage = (messageID, convID) => {
    const { activeUserID } = this.state

    deleteMessage(messageID)
      .then((res) => {
        if (!res.error) {
          this.setState((prevState) => {
            return {
              conversations: {
                ...prevState.conversations,
                [activeUserID]: prevState.conversations[
                  activeUserID
                ].map((conv) =>
                  conv._id === convID
                    ? Object.assign(conv, { message: null })
                    : { ...conv }
                )
              }
            }
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  setUpdatedMessage = (message, convID) => {
    this.setState({
      showModal: true,
      updatedMessage: {
        message,
        convID
      }
    })
  }

  handleUpdateMessage = (text) => {
    const { updatedMessage, activeUserID } = this.state
    updateMessage(updatedMessage.message._id, text)
      .then((res) => {
        if (!res.error) {
          this.setState((prevState) => {
            return {
              conversations: {
                ...prevState.conversations,
                [activeUserID]: prevState.conversations[
                  activeUserID
                ].map((conv) =>
                  conv._id === updatedMessage.convID
                    ? Object.assign(conv, { message: res.message })
                    : { ...conv }
                )
              },
              showModal: false
            }
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { loggedUser } = this.props
    if (!loggedUser) return <Redirect to="/login" />

    let { users } = this.state
    const {
      searchedQuery,
      activeUserID,
      conversations,
      showModal,
      updatedMessage
    } = this.state
    users = users.filter(
      (user) =>
        user.id !== loggedUser.id &&
        (user.name.includes(searchedQuery) ||
          user.username.includes(searchedQuery))
    )

    return (
      <>
        <NavBar />
        <div className="container pt-1 chat">
          {showModal && (
            <UpdateModal
              closeModal={this.closeModal}
              updatedMessage={updatedMessage.message}
              handleUpdateMessage={this.handleUpdateMessage}
            />
          )}
          <div className="row px-3">
            <div className="col-12 col-md-6 col-lg-8 order-1 ordre-md-0 messages-section">
              {activeUserID && (
                <MessageForm sendMessage={this.handleSendMessage} />
              )}
              <Messages
                messages={conversations[activeUserID]}
                loggedUserID={loggedUser.id}
                deleteMessage={this.handleDeleteMessage}
                setUpdatedMessage={this.setUpdatedMessage}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 order-0 order-md-1 users-section">
              <SearchUsers queryUsers={this.handleSearchUsers} />
              <UsersList
                users={users}
                activeUserID={activeUserID}
                setActiveUser={this.handleSetActiveUser}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default withRouter(connectStore(Chat))
