import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import HomeIcon from '@mui/icons-material/Home';
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className='navBar' role='navigation'>
        <h5>DCC U-Toob Clone</h5>
        


      <Link to='/' id='home'>
      <HomeIcon type="button" className="MuiIcon-Home" fontSize="large" />
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
