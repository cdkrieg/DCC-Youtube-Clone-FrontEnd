import React from "react";
import { useNavigate } from "react-router";

import "./VideoItem.css";

const VideoItem = ({ video, setSelectedVideo, selectedVideo }) => {
  const navigate = useNavigate();
  if(video.snippet)
  return (
      <div
        onClick={() => {setTimeout(() => {
          setSelectedVideo(video);
          navigate("/video");
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
  );
};

export default VideoItem;
