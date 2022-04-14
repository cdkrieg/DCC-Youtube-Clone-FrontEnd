import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import "./NavBar.css";
import bootstrap from "bootstrap";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {
  return (
    <div>
      <nav className='navbar navbar-default'>
        <div className='container'>
          <label>DCC Youtube Clone</label>
        </div>
        <div className='search'>
          <SearchBar />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
