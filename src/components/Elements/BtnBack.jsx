import React from "react";
import "./BtnBack.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BtnBack = (props) => {
  return (
    <div>
      <Link to="/user">
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

BtnBack.propTypes = {};

export default BtnBack;
