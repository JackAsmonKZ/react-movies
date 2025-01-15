import React, { useState, useEffect } from "react";

export const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleSearch = () => {
    searchMovies(search, type);
  };

  const handleFilter = (e) => {
    setType(() => e.target.dataset.type);
  };

  useEffect(() => {
    searchMovies(search, type);
  }, [type]);

  return (
    <div className="container row">
      <div className="col s12">
        <div className="input-field">
          <input
            placeholder="Search"
            id="search"
            type="text"
            className="validate"
            value={search}
            onChange={handleChange}
            onKeyDown={handleKey}
          />
          <button className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <span>Films only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <span>Series only</span>
          </label>
        </p>
      </div>
    </div>
  );
};
