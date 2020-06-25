import React from "react";
import { Link } from "react-router-dom";
import logos from "../../img/twitter.png";
import map from "../../img/map.jpg";
import "./CaregiverHome.scss";

function CaregiverHome() {
  return (
    <div className="caregiver-home">
      <div className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>Tasks</p>
          <p>Track tasks</p>
        </div>
      </div>
      <Link to="/caregiver/his-planning" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>His planning</p>
          <p>Add events</p>
        </div>
      </Link>
      <Link to="/caregiver/send-photos" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>His relatives</p>
          <p>Add info and photos</p>
        </div>
      </Link>
      <Link to="/caregiver/his-infos" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>His info</p>
          <p>Health and personal details</p>
        </div>
      </Link>
      <Link to="/caregiver/his-stats" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>Stats</p>
          <p>Record</p>
        </div>
      </Link>
      <img className="caregiver-map" src={map} alt="map" />
    </div>
  );
}

export default CaregiverHome;
