import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import SideBarNav from './Components/SideBars/SideBarNav'

function App() {
  const [search, setSearch] = useState();

  useEffect(() => {}, [search]);

  return (
    <div className='App'>
      <NavBar />
      {/* <SearchBar /> */}
      <SideBarNav />
    </div>
  );
}

export default App;
