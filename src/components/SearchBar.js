import React, { useState } from "react";

function SearchBar(props) {
  const [query, setQuery] = useState('');


  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    props.search(query);
    setQuery("");
  }


  function handleChange(e) {
    setQuery(e.target.value);
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
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Search
      </button>
    </form>
  );
}

export default SearchBar;