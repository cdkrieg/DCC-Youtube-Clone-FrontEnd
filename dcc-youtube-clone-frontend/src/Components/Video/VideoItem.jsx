import React from 'react'
import './VideoItem.css'

const VideoItem = ({video, setSelectedVideo}) => {
    return (
        <div onClick={ () => setSelectedVideo(video)} className="videoItem">
            <img className='videoImg' src ={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='videoData'>
                <div className='channelDetails'>{video.snippet.title}
    
                </div>
            </div>
        </div>
      )
}

export default VideoItem;