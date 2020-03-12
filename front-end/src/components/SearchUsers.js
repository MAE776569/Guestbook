import React from "react"

// Component to search for users
function SearchUsers() {
  return (
    <li className="form-row m-0">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-users__input"
          placeholder="Search Users"
        />
         <div className="input-group-append">
          <span className="input-group-text">@</span>
        </div>
      </div>
    </li>
  )
}

export default SearchUsers
