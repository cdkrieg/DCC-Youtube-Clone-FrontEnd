
import 'react-bootstrap-drawer/lib/style.css';
import './SideBarLeft.css'
import React from 'react';
import SideBarNav from './SideBarNav'


function SideBarLeft(props) {


    return (
        <div className="sideBarLeft" >
            <SideBarNav selected title={"Home"} />
            <SideBarNav title={"Trending"} />
            
        </div>
        );
  };
  
  export default SideBarLeft