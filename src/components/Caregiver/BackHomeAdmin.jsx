import React from "react";
import "../Elements/BtnBack";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BackHomeAdmin = (props) => {
  return (
    <div>
      <Link to="/caregiver">
        <div className="back">
          <div className="icon">
            <img src="/icons/back.svg"></img>
          </div>
          <div className="txt">Go back home</div>
        </div>
      </Link>
    </div>
  );
};

BackHomeAdmin.propTypes = {};

export default BackHomeAdmin;
