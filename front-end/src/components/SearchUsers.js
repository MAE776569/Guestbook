import React, { useState } from "react"

// Component to search for users
function SearchUsers() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="d-flex flex-nowrap search-users">
      <form className="w-100">
        <div className="input-group">
          <input
            type="text"
            className="form-control search-users__input"
            placeholder="Enter name or username"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchUsers
