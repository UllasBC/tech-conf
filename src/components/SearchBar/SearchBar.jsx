import React from "react";
import "./SearchBar.css";

export const SearchBar = (props) => {
  return (
    <form className="search-bar">
      <input
        type="search"
        placeholder="Search conference by the name or city..."
        onChange={(evt) => props.searchInput(evt.target.value)}
      />
      <i class="fa fa-search"></i>
    </form>
  );
};
