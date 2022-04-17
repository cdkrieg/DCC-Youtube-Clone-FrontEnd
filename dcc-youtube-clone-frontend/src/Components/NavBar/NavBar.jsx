import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className='navBar'>
      <div className='container'>
        <label>DCC Youtube Clone</label>
      </div>
      <Link to="/">
      <label id="home">Home</label>
      </Link>
      <div className='searchBar'>
        <SearchBar
          setSearch={props.setSearch}
          setSearchResult={props.setSearchResult}
          searchResult={props.searchResult}
        />
      </div>
    </div>
  );
};

export default NavBar;
