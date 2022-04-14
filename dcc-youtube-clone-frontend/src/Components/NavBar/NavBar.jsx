import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {
  return (
    <div>
      <Navbar className='navbar navbar-default'>
        <div className='container'>
          <label>DCC Youtube Clone</label>
        </div>
        <div className='search'>
          <SearchBar />
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
