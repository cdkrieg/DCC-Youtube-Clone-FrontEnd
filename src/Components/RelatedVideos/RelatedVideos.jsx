import React, { useState, useEffect } from "react";
import VideoCard from "../Video/VideoCard/VideoCard";
import Axios from "../Routes/RoutesAxios";
import BaseURL from "../BaseURL";

function RelatedVideos({ setSelectedVideo, selectedVideo }) {
  const [videos, setVideos] = useState();

  useEffect(() => {
    getRelated();
  }, [selectedVideo]);

  async function getRelated() {
    try {
      let searchString =
        BaseURL.YouTubeBaseURL +
        "relatedToVideoId=" +
        selectedVideo.id.videoId +
        "&maxResults=" +
        20 +
        "&part=snippet";
      let result = await Axios.getYoutubeData(searchString);
      setVideos(result.items);
      return result;
    } catch (error) {
      console.log("Error getting related videos from YouTube: " + error);
    }
  }
    return (
    
      <div className="relatedVideos">
        <h5>Related Videos</h5>
        <div className="related-videoCard">
        <VideoCard setSelectedVideo={setSelectedVideo} videos={videos} />
        </div>
      </div>
     
    );
 
}

export default RelatedVideos;
