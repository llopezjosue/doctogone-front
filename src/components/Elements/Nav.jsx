import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Nav.scss";

const Nav = (props) => {
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
};

Nav.propTypes = {};

export default Nav;
