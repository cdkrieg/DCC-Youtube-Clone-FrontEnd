import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// import ForYou from "./Components/ForYou/ForYou";
import Comment from "./Components/Comment/Comment.jsx";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";

const VideoCard = React.lazy(() => import("./Components/VideoCard/VideoCard"));
const RelatedVideos = React.lazy(() =>
  import("./Components/RelatedVideos/RelatedVideos")
);

function App() {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
 
  useEffect(() => {
    
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
          <Route
            exact
            path='/'
            element={
              <div className='app-home'>

                <h1>Welcome to U-Toob</h1>
              </div>
            }
          />

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
                <Suspense className="container-xsm" fallback={<Spinner />}>
                  {searchResult && (
                    <RelatedVideos
                      selectedVideo={selectedVideo}
                      setSelectedVideo={setSelectedVideo}
                      videos={searchResult.items}
                    />
                  )}
                </Suspense>
                <VideoPlayer className="col-lg-5 mx-auto" selectedVideo={selectedVideo} />
                <Comment selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/>
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
  /*
<Comments className='comments' /> */
}
