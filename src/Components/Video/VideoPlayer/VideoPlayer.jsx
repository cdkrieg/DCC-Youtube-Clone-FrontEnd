import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  const source = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

  return (
    <div className='iFrame'>
      <h2>{props.selectedVideo.snippet.title}</h2>
      <iframe
        // width='50vw'
        // height='auto'
        title='YouTube Video'
        className='iframe'
        src={source}
        allowFullScreen
        allow='autoplay'
      />
    </div>
  );
};

export default VideoPlayer;
