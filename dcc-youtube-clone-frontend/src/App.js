import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [search, setSearch] = useState();

  useEffect(() => {}, [search]);

  return (
    <div className='App'>
      <NavBar />
      {/* <SearchBar /> */}
    </div>
  );
}

export default App;
