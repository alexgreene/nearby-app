import React, { useState } from "react";

function SearchBar(props) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');


  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }

    if (!location.trim()) {
      return;
    }
    props.search(query, location);
    setQuery("");
  }


  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  return (
    <form className="" onSubmit={handleSearch}>
      <div className="flex">
        <div className="searchTitle">Search</div>
        <input
          type="text"
          id="searchLocationInput"
          name="location"
          value={location}
          onChange={handleLocationChange}
          placeholder="location"
        />
      </div>
      <div className="flex">
        <input
          type="text"
          id="searchQueryInput"
          name="text"
          autoComplete="off"
          value={query}
          onChange={handleQueryChange}
          placeholder="for..."
        />
        <button type="submit" id="searchButton">
          🔍
        </button>
      </div>
    
      
    </form>
  );
}

export default SearchBar;