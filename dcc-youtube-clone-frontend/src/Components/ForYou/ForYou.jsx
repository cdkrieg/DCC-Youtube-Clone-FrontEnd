import React from 'react';
import './ForYou.css'
import VideoThumbNail from '../VideoThumbNail/VideoThumbNail';

const ForYou = () => {

    return ( 
        <div className="forYou">
            <h2>For You Videos</h2>
            <div className="videos">
                <VideoThumbNail />
                <VideoThumbNail />
                <VideoThumbNail />
                <VideoThumbNail />
                
            </div>
        </div>
     );
}
 
export default ForYou;