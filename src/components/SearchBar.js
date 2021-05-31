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
    <form onSubmit={handleSearch}>
      <input
        type="text"
        id="search-query-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={query}
        onChange={handleQueryChange}
        placeholder="query"
      />
      <input
        type="text"
        id="search-location-input"
        className="input input__lg"
        name="location"
        autoComplete="off"
        value={location}
        onChange={handleLocationChange}
        placeholder="location"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Search
      </button>
    </form>
  );
}

export default SearchBar;