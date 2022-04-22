import React, {ErrorBoundary, Error} from "react";
import { Link } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className='navBar' role='navigation'>
      <div className='container'>
        <h4>DCC U-Toob Clone</h4>
        
      </div>
      <YouTubeIcon className="youtubeicon"/>
      <Link to='/' id='home'>
        <label >Home</label>
      </Link>
      <ErrorBoundary fallback={<Error>Could not load SearchBar</Error>}>
      <SearchBar
        className='searchBar'
        setSearch={props.setSearch}
        setSearchResult={props.setSearchResult}
        searchResult={props.searchResult}
      />
      </ErrorBoundary>
    </nav>
  );
};

export default NavBar;
