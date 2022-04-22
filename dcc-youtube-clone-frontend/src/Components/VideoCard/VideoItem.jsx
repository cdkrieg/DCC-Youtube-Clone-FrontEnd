import React, { ErrorBounday, Error } from "react";
import { useNavigate } from "react-router";

import "./VideoItem.css";

const VideoItem = ({ video, setSelectedVideo, selectedVideo }) => {
  const navigate = useNavigate();
  return (
    <ErrorBounday fallback={<Error>Error loading VideoItem</Error>}>
      <div
        onClick={() => {
          setSelectedVideo(video);
          navigate("/video");
        }}
        className='videoItem'>
        <img
          className='videoImg'
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div className='videoData'>
          <div className='channelDetails'>{video.snippet.title}</div>
        </div>
      </div>
    </ErrorBounday>
  );
};

export default VideoItem;
