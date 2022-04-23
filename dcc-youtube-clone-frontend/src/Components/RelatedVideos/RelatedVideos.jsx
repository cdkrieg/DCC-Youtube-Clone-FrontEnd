import React, { useState, useEffect } from "react";
import VideoCard from "../Video/VideoCard/VideoCard";
import Axios from "../Routes/RoutesAxios";
import BaseURL from "../BaseURL";

function RelatedVideos({ setSelectedVideo, selectedVideo }) {
  const [videos, setVideos] = useState();
  let count = 0

  useEffect(() => {
    getRelated();
  }, [selectedVideo]);

  async function getRelated() {
    console.log(`videoId is ${selectedVideo.id.videoId}`);
    try {
      let searchString =
        BaseURL.YouTubeBaseURL +
        "relatedToVideoId=" +
        selectedVideo.id.videoId +
        "&maxResults=" +
        8 +
        "&part=snippet";
      console.log(searchString);
      let result = await Axios.getYoutubeData(searchString);
      console.log(result);
      setVideos(result.items);
      return result;
    } catch (error) {
      console.log("Error getting related videos from YouTube: " + error);
    }
  }
    return (
    
      <div className='sideBarLeft'>
        <h5>Related Videos</h5>
        <VideoCard setSelectedVideo={setSelectedVideo} videos={videos} />
      </div>
     
    );
 
}

export default RelatedVideos;
