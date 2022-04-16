import React from 'react'
import { Avatar } from '@mui/material';
import './VideoThumbNail.css'

function VideoThumbNail(props) {
    const {image, title, channel, views, channelPic} = props;
  return (
    <div className="videoThumbNail">
        <img src={image} className="videoThumbNailImage" alt="" />
        <div className='=info'>
            <Avatar className='videoThumbnailAvatar' src={channelPic}></Avatar>
            <div className='videoTitle'>
                <h3>{title}</h3>
                <p>{channel}</p>
                <p>{views}</p>
                <p>{channelPic}</p>
            </div>

        </div>
        
    </div>
  )
}

export default VideoThumbNail