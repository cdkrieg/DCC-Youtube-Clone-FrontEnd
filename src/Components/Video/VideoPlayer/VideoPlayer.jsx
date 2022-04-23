import React, { ErrorBounday, Error } from "react";

const VideoPlayer = (props) => {
  const source = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

  return (
    // <ErrorBounday fallback={<Error>Error loading the VideoPlayer</Error>}>
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
    // </ErrorBounday>
  );
};

export default VideoPlayer;
