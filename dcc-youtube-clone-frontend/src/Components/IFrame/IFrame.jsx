import React from 'react';
import './IFrame.css'

const IFrame = (props) => {
    const source = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`
    return ( 
        <div className='iFrame'>
            <h2>{props.selectedVideo.snippet.title}</h2>    
                <iframe width="500" height="375" title='YouTube Video' 
                src={source} />

        </div>
     );
}
 
export default IFrame;