import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.scss';

const Nav = (props) => {
  let url = useLocation();

  if (url.pathname === '/') {
    return null;
  } else {
    return (
      <div className="nav">
        <Link to="/">
          <div className="logo">
            <img src="/icons/logo.svg"></img>
          </div>
        </Link>
        <Link to="/">
          <div className="login">
            <img src="/icons/login.svg"></img>
          </div>
        </Link>
      </div>
    );
  }
};

export default Nav;
