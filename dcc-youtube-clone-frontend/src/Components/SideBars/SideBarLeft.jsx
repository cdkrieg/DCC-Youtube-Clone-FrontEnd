
import 'react-bootstrap-drawer/lib/style.css';
import './SideBarLeft.css'
import React from 'react';
import SideBarNav from './SideBarNav'
import VideoCard from '../VideoCard/VideoCard';
import { Navigate, useNavigate } from 'react-router';


function SideBarLeft({videos, setSelectedVideo}) {
    const navigate = useNavigate()

    return (
        <div className="sideBarLeft" >
            <SideBarNav title={"Home"} onClick={()=> navigate("/")}/>
            <h4>Related Videos</h4>
            <VideoCard
                    setSelectedVideo={setSelectedVideo}
                    videos={videos}
                  />
        </div>
        );
  };
  
  export default SideBarLeft