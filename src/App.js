import React, {
  useState,
  useEffect,
  Suspense,
} from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ErrorBoundary from './Components/ErrorBoundary'

// import ForYou from "./Components/ForYou/ForYou";
import Comment from "./Components/Comment/Comment.jsx";
import VideoPlayer from "./Components/Video/VideoPlayer/VideoPlayer";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";

const VideoCard = React.lazy(() => import("./Components/Video/VideoCard/VideoCard"));
const RelatedVideos = React.lazy(() =>
  import("./Components/RelatedVideos/RelatedVideos")
);

function App() {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {}, [search, searchResult, selectedVideo]);

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
              // <ErrorBoundary
                // fallback={<Error>Error loading video cards</Error>}>
                <Suspense fallback={<Spinner />}>
                  {searchResult && (
                    <VideoCard
                      setSelectedVideo={setSelectedVideo}
                      videos={searchResult.items}
                    />
                  )}
                </Suspense>
              // </ErrorBoundary>
            }
          />
          <Route
            path='/video'
            element={
              <div className='app-video'>
                <ErrorBoundary>
                  <Suspense className='container-xsm' fallback={<Spinner />}>
                    {searchResult && (
                      <RelatedVideos
                        selectedVideo={selectedVideo}
                        setSelectedVideo={setSelectedVideo}
                        
                      />
                    )}
                  </Suspense>
                </ErrorBoundary>
                <ErrorBoundary className="app-video-comment">
                  <VideoPlayer
                  className="videoPlayer"
                    selectedVideo={selectedVideo}
                  />
                {/* </ErrorBoundary> */}
                {/* <ErrorBoundary
                  fallback={<Error>Could not load Comments Section</Error>}> */}
                  <Comment
                    id='comments'
                    selectedVideo={selectedVideo}
                    setSelectedVideo={setSelectedVideo}
                  />
                </ErrorBoundary>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
