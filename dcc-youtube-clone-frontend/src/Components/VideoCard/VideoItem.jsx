import React from 'react'
import { Navigate, useNavigate } from 'react-router'
import './VideoItem.css'


const VideoItem = ({video, setSelectedVideo}) => {
    const navigate = useNavigate();
    return (
        <div onClick={ () => {setSelectedVideo(video); navigate('/video')}} className="videoItem">
            <img className='videoImg' src ={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='videoData'>
                <div className='channelDetails'>{video.snippet.title}
    
                </div>
            </div>
        </div>
      )
}

export default VideoItem;