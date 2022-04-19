import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className='navBar' role='navigation'>
      <div className='container'>
        <h4>DCC U-Toob Clone</h4>
      </div>
      <Link to='/' id='home'>
        <label >Home</label>
      </Link>
      <SearchBar
        className='searchBar'
        setSearch={props.setSearch}
        setSearchResult={props.setSearchResult}
        searchResult={props.searchResult}
      />
    </nav>
  );
};

export default NavBar;
