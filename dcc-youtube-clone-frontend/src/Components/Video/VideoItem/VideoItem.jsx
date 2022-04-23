import React, { ErrorBounday, Error } from "react";
import { useNavigate } from "react-router";

import "./VideoItem.css";

const VideoItem = ({ video, setSelectedVideo, selectedVideo }) => {
  const navigate = useNavigate();
  setTimeout(() => {
    console.log(video)
  }, 200);
  if(video.snippet)
  return (
    // <ErrorBounday fallback={<Error>Error loading VideoItem</Error>}>
      <div
        onClick={() => {setTimeout(() => {
          setSelectedVideo(video);
          navigate("/video");
          console.log(video)
        }, 100);
        
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
    // </ErrorBounday>
  );
};

export default VideoItem;
