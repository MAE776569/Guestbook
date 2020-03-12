import React from "react"

function SearchUsers() {
  return (
    <li className="form-row m-0">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">@</span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Users"
        />
      </div>
    </li>
  )
}

export default SearchUsers
