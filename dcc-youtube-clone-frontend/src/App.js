import React, { useState, useEffect } from "react";
import "./App.css";
import Comments from "./Components/Comments";
import IFrame from "./Components/IFrame";
import NavBar from "./Components/NavBar/NavBar";
import SideBarLeft from "./Components/SideBars/SideBarLeft";
import googleAPIKey from "./config";
import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import ForYou from "./Components/ForYou/ForYou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState({});
  // const googleURL = `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${googleAPIKey}`;

  useEffect(() => {
    console.log(`Search is ${search}`);
    console.log(`Search Result is ${searchResult}`);
  }, [search,searchResult]);

  return (
    <div className='App'>
      <Router>
        <NavBar className='navBar' setSearch={setSearch} search={search} setSearchResult={setSearchResult}/>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div className='home'>
                <div className='page'>
                  <SideBarLeft className='sideBarLeft' />
                  <ForYou />
                </div>
              </div>
            }></Route>
          <Route>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  //TODO
  /* <RelatedVideos />

<Comments className='comments' /> */
}
