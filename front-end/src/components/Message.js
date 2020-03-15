import React from "react"

function Message({
  conversation,
  loggedUserID,
  deleteMessage,
  setUpdatedMessage
}) {
  if (!conversation.message)
    return (
      <li className="message-item px-3 py-1 mb-4">
        <div className="message-item__text py-2">This message was deleted</div>
      </li>
    )

  return (
    <li
      className={
        "message-item px-3 py-1 mb-4 " +
        (loggedUserID === conversation.sender ? "mr-auto" : "ml-auto")
      }>
      <div className="message-item__date">{conversation.createdAt}</div>
      <div className="message-item__text py-2">{conversation.message.text}</div>
      {loggedUserID === conversation.sender && (
        <div className="btn-group btn-group-sm d-flex flex-row-reverse">
          <button
            type="button"
            className="message-item__button text-danger"
            onClick={() =>
              deleteMessage(conversation.message._id, conversation._id)
            }>
            Delete
          </button>
          <button
            type="button"
            className="message-item__button text-info"
            onClick={() =>
              setUpdatedMessage(conversation.message, conversation._id)
            }>
            Update
          </button>
        </div>
      )}
    </li>
  )
}

export default Message
