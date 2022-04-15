import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  function submit(event) {
    event.preventDefault();
    console.log(searchText);
    try {
      props.setSearch(searchText);
      setSearchText("");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className='form'>
  
        <input
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          onSubmit={((event) => {
            submit(event)
          })}
        />
        <SearchIcon id='button' type='submit' />
    </div>
  );
};

export default SearchBar;
