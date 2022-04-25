import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ErrorBoundary from "./Components/ErrorBoundary";

// import ForYou from "./Components/ForYou/ForYou";
import Comment from "./Components/Comment/Comment.jsx";
import VideoPlayer from "./Components/Video/VideoPlayer/VideoPlayer";
import NavBar from "./Components/NavBar/NavBar";
import useLocalStorageValue from "./Components/useLocalStorage";
import "./App.css";

const VideoCard = React.lazy(() =>
  import("./Components/Video/VideoCard/VideoCard")
);
const RelatedVideos = React.lazy(() =>
  import("./Components/RelatedVideos/RelatedVideos")
);

function App() {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useLocalStorageValue();
  const [selectedVideo, setSelectedVideo] = useLocalStorageValue();

  useEffect(() => {
    if (selectedVideo === undefined)
      setSelectedVideo(
        JSON.parse(window.localStorage.getItem("selectedVideo"))
      );
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
                <div>
                  <h1>Welcome to U-Toob</h1>
                </div>

                <div>
                  <h3>Click on the search bar above to begin your journey!</h3>
                </div>
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
                <div className="app-relatedVideos">
                <ErrorBoundary>
                  <Suspense fallback={<Spinner />}>
                    {searchResult && (
                      <RelatedVideos
                        selectedVideo={selectedVideo}
                        setSelectedVideo={setSelectedVideo}
                      />
                    )}
                  </Suspense>
                </ErrorBoundary>
                </div>
                <div className="app-videoPlayer-comment">
                <ErrorBoundary>
                  <VideoPlayer
                    className='videoPlayer'
                    selectedVideo={selectedVideo}
                  />
                  <Comment
                    className='comments'
                    selectedVideo={selectedVideo}
                    setSelectedVideo={setSelectedVideo}
                  />
                </ErrorBoundary>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
