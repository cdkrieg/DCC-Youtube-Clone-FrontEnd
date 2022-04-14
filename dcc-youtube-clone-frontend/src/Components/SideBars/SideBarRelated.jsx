import "react-bootstrap-drawer/lib/style.css";
import { Drawer } from "react-bootstrap-drawer";
import "./SideBarRelated.css";
import React from "react";

const SideBarRelated = (props) => {
  return (
    <>
      <Drawer className='drawerRight' {...props}>
        <Drawer.Overflow>
          <Drawer.ToC>
            <Drawer.Header href='/'>Related Videos</Drawer.Header>

            <Drawer.Nav>
              <br />
              <Drawer.Item href='/'></Drawer.Item>
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Drawer>
    </>
  );
};

export default SideBarRelated;
