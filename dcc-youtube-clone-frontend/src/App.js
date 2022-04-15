import React, { useState, useEffect } from "react";
import "./App.css";
import Comments from "./Components/Comments";
import IFrame from "./Components/IFrame";
import NavBar from "./Components/NavBar/NavBar";
import SideBarLeft from "./Components/SideBars/SideBarLeft";
import googleAPIKey from "./config";
import RelatedVideos from "./Components/SideBars/RelatedVideos";

function App() {
  const [search, setSearch] = useState();
  const googleURL = `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${googleAPIKey}`;

  useEffect(() => {
    console.log(`Search is ${search}`);
  }, [search]);

  return (
    <div className='App'>
      <NavBar className='navBar' setSearch={setSearch} />
      <div className='page'>
        <SideBarLeft className='sideBarLeft' />
        <RelatedVideos />
      </div>

      {/* <IFrame className='iFrame' googleURL={googleURL} /> */}
      <Comments className='comments' />
    </div>
  );
}

export default App;
