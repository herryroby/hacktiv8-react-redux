import { Button, Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <nav className="menu-bar">
      <div className="logo">
        <Link to="/">HACKTIV8</Link>
      </div>
      <div className="menu-con">
        <div className="left-menu">
          <Menu mode="horizontal" className="navbar-top">
            <Menu.Item>
              <Link to="/" className="navbar-top-link">
                Posts
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="right-menu">
          <Menu mode="horizontal" className="navbar-top">
            <Menu.Item>
              <Link to="/" className="navbar-top-link">
                Login
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <Button className="bars-menu" type="primary" onClick={showDrawer}>
          <span className="bars-btn" />
        </Button>
        <Drawer
          title="HACKTIV8"
          className="drawer-container"
          placement="right"
          closable
          onClose={handleClose}
          visible={visible}
        >
          <Menu mode="inline">
            <Menu.Item key="1">
              <Link to="/">Posts</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/">Login</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
