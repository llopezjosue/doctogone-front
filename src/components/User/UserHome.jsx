import React from "react";
import { Link } from "react-router-dom";
import map from "../../img/map.jpg";
import "./UserHome.scss";

function UserHome() {
  return (
    <div className="user-home">
      <div className="menu-item alert">
        <div className="img-div">
          <img src="/img/alert.png" />
        </div>
        <div>
          <h2>In 5 minutes</h2>
          <p>Nurse's visit</p>
        </div>
      </div>
      <Link to="/user/my-planning" className="menu-item">
        <div className="img-div">
          <img src="/img/planning.png" />
        </div>
        <div>
          <h2>My planning</h2>
          <p>Program of the day</p>
        </div>
      </Link>
      <Link to="/user/my-relatives" className="menu-item">
        <div className="img-div">
          <img src="/img/relative.png" />
        </div>
        <div>
          <h2>My relatives</h2>
          <p>Name and photos</p>
        </div>
      </Link>
      <Link to="/user/my-infos" className="menu-item">
        <div className="img-div">
          <img src="/img/infos.png" />
        </div>
        <div>
          <h2>My infos</h2>
          <p>Health, My Person</p>
        </div>
      </Link>
      <Link to="/user/sos" className="menu-item">
        <div className="img-div">
          <img src="/img/sos.png" />
        </div>
        <div>
          <h2>SOS</h2>
          <p>To call emergency or my family</p>
        </div>
      </Link>
      <img className="user-map" src={map} alt="map" />
    </div>
  );
}

export default UserHome;
