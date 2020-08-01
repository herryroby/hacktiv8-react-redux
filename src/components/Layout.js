import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div className="main-container">
      <main>{children}</main>
    </div>
    <Footer>Copyright &copy; Herry Roby 2020</Footer>
  </>
);

Layout.propTypes = propTypes;

export default Layout;
