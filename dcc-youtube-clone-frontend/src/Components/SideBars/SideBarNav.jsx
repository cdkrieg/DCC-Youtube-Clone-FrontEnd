
import 'react-bootstrap-drawer/lib/style.css';
import './SideBarNav.css'
import React from 'react';


function SideBarNav({selected, title}) {


    return (
        <div className={`sideBarNav ${selected && "selected"}`}>
            <p className='sideBarNav-Title'>{title}</p>
        </div>
        );
  };
  
  export default SideBarNav