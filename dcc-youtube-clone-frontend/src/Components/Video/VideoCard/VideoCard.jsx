import React, { ErrorBounday, Error } from "react";

import VideoItem from "../VideoItem/VideoItem";

import "./VideoCard.css";

const VideoCard = ({ videos, setSelectedVideo, selectedVideo }) => {
  const renderedVideos = videos.map((video) => {
    return (
      // <ErrorBounday
      //   fallback={<Error>Error loading VideoItem on VideoCard</Error>}>
        <VideoItem
          key={video.id.videoId}
          video={video}
          setSelectedVideo={setSelectedVideo}
          selectedVideo={selectedVideo}
        />
      // </ErrorBounday>
    );
  });
  return <div className='videoCard'>{renderedVideos}</div>;
};

export default VideoCard;
