
import 'react-bootstrap-drawer/lib/style.css';
import './SideBarNav.css'
import React from 'react';


function SideBarNav({selected, title}) {


    return (
        <div className={`sideBarNav ${selected && "selected"}`}>
            <h2 className='sideBarNav-Title'>{title}</h2>
        </div>
        );
  };
  
  export default SideBarNav