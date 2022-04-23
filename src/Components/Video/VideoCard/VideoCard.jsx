import React from "react";

import VideoItem from "../VideoItem/VideoItem";

import "./VideoCard.css";

const VideoCard = ({ videos, setSelectedVideo, selectedVideo }) => {
  if (Array.isArray(videos)) {

      const renderedVideos = videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            setSelectedVideo={setSelectedVideo}
            selectedVideo={selectedVideo}
          />
        );
      });
      return <div className='videoCard'>{renderedVideos}</div>;

  } else return <p>No Related Videos</p>;
};

export default VideoCard;
