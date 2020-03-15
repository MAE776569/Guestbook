import React from "react"

function MessageForm() {
  return (
    <div className="d-flex flex-nowrap message-form">
      <form className="w-100">
        <div className="input-group">
          <textarea
            className="message-form__input"
            placeholder="Enter Your Message"
            spellCheck={true}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-primary">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MessageForm
