import React from 'react'


const Search = ({ search }) => {


  return (
    <form className="search">
      <input
        placeholder="Enter keyword"
        type="text"
      />
      <button>Search</button>
    </form>
  )
}

export default Search