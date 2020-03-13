import React from "react"

// Component to search for users
function SearchUsers() {
  return (
    <div className="d-flex flex-nowrap search-users">
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
    </div>
  )
}

export default SearchUsers
