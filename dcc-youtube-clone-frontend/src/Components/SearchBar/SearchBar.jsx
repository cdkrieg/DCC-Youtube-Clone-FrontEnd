import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
import Axios from "../Routes/RoutesAxios";

import YouTubeBaseURL from "../BaseURL";
import googleAPIKey from "../../config";
import "./SearchBar.css";


const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    let searchString = YouTubeBaseURL+
    'key='+googleAPIKey+
    '&q='+searchText+
    '&maxResults='+8+
    '&type=video'+
    '&part=snippet'

    try {
      let result = await Axios.getYoutubeData(searchString);
      props.setSearchResult(result)
      setSearchText("")
      navigate('/search')
    
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='input-group input-group-sm mb-3'>
      <input
        type='text'
        placeholder='Search'
        className="form-control"
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
