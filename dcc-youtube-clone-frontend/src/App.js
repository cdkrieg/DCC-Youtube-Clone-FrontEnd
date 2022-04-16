import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
// import Comments from "./Components/Comments";
// import IFrame from "./Components/IFrame";
import NavBar from "./Components/NavBar/NavBar";
import SideBarLeft from "./Components/SideBars/SideBarLeft";
// import googleAPIKey from "./config";
// import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const VideoCard = React.lazy(()=>import("./Components/Video/VideoCard"));

function App() {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  // const googleURL = `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${googleAPIKey}`;

  useEffect(() => {
    
  }, [search, searchResult]);

  return (
    <div className='App'>
      <NavBar
        className='navBar'
        setSearch={setSearch}
        search={search}
        setSearchResult={setSearchResult}
        searchResult={searchResult}
      />

      <div className='home'>
        <div className='page'>
          <SideBarLeft className='sideBarLeft' />
          <Suspense fallback={<Spinner/>}>
            {searchResult &&
            <VideoCard
              setSelectedVideo={setSelectedVideo}
              
              videos={searchResult.items}
            />
          }
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  //TODO
  /* <RelatedVideos />

<Comments className='comments' /> */
}
