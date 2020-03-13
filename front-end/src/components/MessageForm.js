import React from "react"

function MessageForm() {
  return (
    <div className="d-flex flex-nowrap message-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control message-form__input"
          placeholder="Enter Your Message"
          spellCheck={true}
        />
        <div className="input-group-append">
          <span className="input-group-text">></span>
        </div>
      </div>
    </div>
  )
}

export default MessageForm
