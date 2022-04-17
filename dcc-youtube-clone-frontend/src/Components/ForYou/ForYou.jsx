import React, { Suspense, useEffect, useState } from 'react';
import './ForYou.css'
// import VideoThumbNail from '../VideoThumbNail/VideoThumbNail';
import getYoutubeData from '../Routes/RoutesAxios';
import BaseURL from '../BaseURL';
import googleAPIKey from '../../config';
import { Spinner } from 'react-bootstrap';
const VideoCard = React.lazy(() => import('../VideoCard/VideoCard'));

const ForYou = (props) => {
    const [videos,setVideos] = useState();

useEffect(() => {
//     async function getForYouVideos() {
//         let searchString = BaseURL+
//         'key='+googleAPIKey+
//         '&videoCategoryID=44'+
//         '&maxResults='+8+
//         '&type=video'+
//         '&part=snippet'
    
//         try {
//           let result = await getYoutubeData(searchString);
//           setVideos(result)
//           console.log(videos)
//           return <VideoCard setSelectedVideo={props.setSelectedVideo}
//           videos={result}/>
        
//         } catch (error) {
//           console.log(error);
//         }
//       }
//   setVideos(getForYouVideos());

}, [props.setSelectedVideo])


    
      
    return ( 
        
        <div className="forYou" >
            
            <h2>For You Videos</h2>
            <div className="videos">
                <Suspense fallback={<Spinner />}>
                {/* {videos} */}
                <div></div>
                    </Suspense>
              
                
            </div>
        </div>
     );
}
 
export default ForYou;