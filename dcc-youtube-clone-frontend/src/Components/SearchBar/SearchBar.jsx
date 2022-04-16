import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import googleAPIKey from "../../config";
import getYoutubeData from "../Routes/RoutesAxios";
import { Link } from "react-router-dom";
const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const searchURl = `https://www.googleapis.com/youtube/v3/search?q=${searchText}&key=${googleAPIKey}&part=snippet&type=video&maxResults=5`;

  // function searchURLExists(){
  //   if(searchText !== "")
  //     return searchURl
  //   return null
  // }

  function submit(event) {
    event.preventDefault();
    console.log(searchText);

    try {
      let result = getYoutubeData(searchURl);
      result.then(result => {props.setSearchResult(result)})
      setSearchText("");
    } catch (error) {
      console.log(error);
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
      />
      <a href="/search">
        <SearchIcon
          id='button'
          type='button'
          onClick={(event) => {
            submit(event);
          }}/>
          </a>
    </div>
  );
};

export default SearchBar;
