import React, { Suspense } from 'react';
import './ForYou.css'
// import VideoThumbNail from '../VideoThumbNail/VideoThumbNail';
import getYoutubeData from '../Routes/RoutesAxios';
import BaseURL from '../BaseURL';
import googleAPIKey from '../../config';
import { Spinner } from 'react-bootstrap';
const VideoCard = React.lazy(() => import('../Video/VideoCard'));

const ForYou = (props) => {
    async function onLoad() {
        let searchString = BaseURL+
        'key='+googleAPIKey+
        '&videoCategoryID=44'+
        '&maxResults='+8+
        '&type=video'+
        '&part=snippet'
    
        try {
          let result = await getYoutubeData(searchString);
          props.setForYouVideos(result)
        
        } catch (error) {
          console.log(error);
        }
      }

    return ( 
        <div className="forYou">
            <h2>For You Videos</h2>
            <div className="videos">
                <Suspense fallback={<Spinner />}>
                {props.forYouVideos && <VideoCard setSelectedVideo={props.setSelectedVideo}
                    videos={props.forYouVideos.items}/>}
                    </Suspense>
              
                
            </div>
        </div>
     );
}
 
export default ForYou;