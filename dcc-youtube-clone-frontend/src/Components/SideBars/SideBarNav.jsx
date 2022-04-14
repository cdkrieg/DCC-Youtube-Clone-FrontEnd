
import 'react-bootstrap-drawer/lib/style.css';
import { Drawer, } from 'react-bootstrap-drawer';
import './SideBarNav.css'
import React from 'react';


const SideBarNav = (props) => {


    return (
        <>
    
    <Drawer className="drawer" { ...props }>
            {/* <Drawer.Toggle onClick={ handleToggle } /> */}

            {/* <Collapse in={ open }> */}
                <Drawer.Overflow>
                    <Drawer.ToC>
                        <Drawer.Header href="/">Home</Drawer.Header>

                        <Drawer.Nav>
                            <br />
                            <Drawer.Item href="/">Categories</Drawer.Item>
                        </Drawer.Nav>
                    </Drawer.ToC>
                </Drawer.Overflow>
            {/* </Collapse> */}
        </Drawer>
          
        </>
        );
  };
  
  export default SideBarNav