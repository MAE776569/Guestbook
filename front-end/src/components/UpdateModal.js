import React from "react"

function UpdateModal({ closeModal, updatedMessage }) {
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
              className="form-control">{updatedMessage.text}</textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
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

export default UpdateModal
