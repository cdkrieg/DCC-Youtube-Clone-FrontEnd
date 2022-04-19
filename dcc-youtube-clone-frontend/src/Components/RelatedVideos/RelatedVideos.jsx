import React from "react";
import VideoCard from "../VideoCard/VideoCard";

function RelatedVideos({ videos, setSelectedVideo }) {

  return (
    <div className='sideBarLeft'>
      <h5>Related Videos</h5>
      <VideoCard setSelectedVideo={setSelectedVideo} videos={videos} />
    </div>
  );
}

export default RelatedVideos;
