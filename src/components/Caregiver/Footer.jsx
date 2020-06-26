import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = (props) => {
  return (
    <div>
      <div className="copyrigdht">
        Copyright - 2020
        <Link to="/caregiver/chatbot">
          <div className="robot">
            <img src="/icons/chatbox.svg" />
          </div>
        </Link>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
