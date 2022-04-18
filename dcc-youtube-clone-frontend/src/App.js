import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
// import Comments from "./Components/Comments";
import IFrame from "./Components/IFrame/IFrame";
import NavBar from "./Components/NavBar/NavBar";
// import SideBarLeft from "./Components/SideBars/SideBarLeft";
// import googleAPIKey from "./config";
// import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ForYou from "./Components/ForYou/ForYou";
const VideoCard = React.lazy(() => import("./Components/VideoCard/VideoCard"));
const SideBarLeft = React.lazy(() =>import ("./Components/SideBars/SideBarLeft"));

function App() {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [forYouVideos, setForYouVideos] = useState();
  // const googleURL = `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${googleAPIKey}`;

  useEffect(() => {
    if (selectedVideo) console.log(selectedVideo);
  }, [search, searchResult, selectedVideo]);

  return (
    <div className='App'>
      <NavBar
        className='app-navBar'
        setSearch={setSearch}
        search={search}
        setSearchResult={setSearchResult}
        searchResult={searchResult}
      />
      <div className='page'>
        <Routes>
          <Route exact path='/' className='app-home' element={<div></div>} />
          {/* <ForYou 
          setForYouVideos={setForYouVideos} forYouVideos={forYouVideos}/></div>}
          /> */}

          <Route
            path='/search'
            className='app-search'
            element={
              <Suspense fallback={<Spinner />}>
                {searchResult && (
                  <VideoCard
                    setSelectedVideo={setSelectedVideo}
                    videos={searchResult.items}
                  />
                )}
              </Suspense>
            }
          />
          <Route
            path='/video'
            element={
              <div className='app-video'>
                <Suspense fallback={<Spinner />}>
                {searchResult && (
                  <SideBarLeft
                    setSelectedVideo={setSelectedVideo}
                    videos={searchResult.items}
                  />
                  
                )}
                </Suspense>
                <IFrame selectedVideo={selectedVideo} />
              </div>
              
            }
          />
        </Routes>
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
