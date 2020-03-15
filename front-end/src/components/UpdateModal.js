import React, { Component } from "react"

class UpdateModal extends Component {
  render() {
    const { closeModal, updatedMessage, handleUpdateMessage } = this.props

    return (
      <div className="modal d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Message</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span onClick={closeModal}>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <label htmlFor="text" className="col-form-label mb-2">
                Enter the new message
              </label>
              <textarea
                id="text"
                cols="30"
                rows="10"
                className="form-control"
                ref={(el) => (this.textMessage = el)}>
                {updatedMessage.text}
              </textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleUpdateMessage(this.textMessage.value)}>
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateModal
