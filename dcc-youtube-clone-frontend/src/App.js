import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import SideBarNav from './Components/SideBars/SideBarNav'
import SideBarRelated from "./Components/SideBars/SideBarRelated";

function App() {
  const [search, setSearch] = useState();

  useEffect(() => {}, [search]);

  return (
    <div className='App'>
      <NavBar />
      <SideBarNav />
      <SideBarRelated />
    </div>
  );
}

export default App;
