import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.css";

export const Header = (props) => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__logo">Tech-Conf <i class="fa fa-users" aria-hidden="true"></i> </div>
        <div className="header-container__search-bar">
          <SearchBar searchInput={props.searchInput} />
        </div>
      </div>
    </div>
  );
};
