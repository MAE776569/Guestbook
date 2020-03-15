import React from "react"

function UpdateModal({ open, setModalVisibility }) {
  return (
    <div className={"modal" + (open ? " d-block" : "")}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Message</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span onClick={() => setModalVisibility(false) }>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <label htmlFor="text" className="col-form-label">
              Update Message
            </label>
            <textarea
              id="text"
              cols="30"
              rows="10"
              className="form-control"></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setModalVisibility(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateModal
