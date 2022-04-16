import React from "react";
import VideoItem from "./VideoItem";
import './VideoCard.css'

const VideoCard = ({ videos, setSelectedVideo }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        setSelectedVideo={setSelectedVideo}
      />
    );
  });
  return <div className="videoCard">{renderedVideos}</div>;
};

export default VideoCard;
