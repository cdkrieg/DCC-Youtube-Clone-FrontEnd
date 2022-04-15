import React from 'react';
import './RelatedVideos.css'
import VideoThumbNail from './VideoThumbNail';

const RelatedVideos = () => {

    return ( 
        <div className="relatedVideos">
            <h2>Related Videos</h2>
            <div className="videos">
                <VideoThumbNail />
                <VideoThumbNail />
                <VideoThumbNail />
                <VideoThumbNail />
                
            </div>
        </div>
     );
}
 
export default RelatedVideos;