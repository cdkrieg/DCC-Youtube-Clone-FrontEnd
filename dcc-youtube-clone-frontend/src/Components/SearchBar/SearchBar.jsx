import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import googleAPIKey from "../../config";
import getYoutubeData from "../Routes/RoutesAxios";
import { Link } from "react-router-dom";
import BaseURL from "../BaseURL";
import {useNavigate} from 'react-router-dom'

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  // function searchURLExists(){
  //   if(searchText !== "")
  //     return searchURl
  //   return null
  // }

  async function submit(event) {
    event.preventDefault();
    let searchString = BaseURL+
    'key='+googleAPIKey+
    '&q='+searchText+
    '&maxResults='+8+
    '&type=video'+
    '&part=snippet'

    try {
      let result = await getYoutubeData(searchString);
      props.setSearchResult(result)
      setSearchText("")
      navigate('/search')
    
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
        onKeyUp={(event)=>{if(event.key === 'Enter')
          submit(event)
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
