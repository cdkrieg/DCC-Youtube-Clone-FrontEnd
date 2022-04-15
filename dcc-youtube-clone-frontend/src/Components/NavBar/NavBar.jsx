import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = (props) => {
  return (
    <div className='navBar'>
      <div className='container'>
        <MenuIcon />
        <label>DCC Youtube Clone</label>
      </div>
      <div className='search'>
        <SearchBar setSearch={props.setSearch}/>
      </div>
    </div>
  );
};

export default NavBar;
