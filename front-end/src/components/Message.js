import React from "react"

function Message() {
  return (
    <li className="message-item px-3 py-1">
      <div className="message-item__date">createdAt</div>
      <div className="message-item__text py-2">Text</div>
      <div className="btn-group btn-group-sm d-flex flex-row-reverse">
        <button
          type="button"
          className="message-item__button text-danger">
          Delete
        </button>
        <button
          type="button"
          className="message-item__button text-info">
          Update
        </button>
      </div>
    </li>
  )
}

export default Message
