import React from "react";
import { Link } from "react-router-dom";
import logos from "../../img/twitter.png";
import map from "../../img/map.jpg";
import "./UserHome.scss";

function UserHome() {
  return (
    <div className="user-home">
      <div className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>in 5 minutes</p>
          <p>visite de l'infirmière</p>
        </div>
      </div>
      <Link to="/user/my-planning" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>My planning</p>
          <p>mon programme du jour</p>
        </div>
      </Link>
      <Link to="/user/my-relatives" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>My relatives</p>
          <p>name and photos</p>
        </div>
      </Link>
      <Link to="/user/my-infos" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>My infos</p>
          <p>santé, adresse</p>
        </div>
      </Link>
      <Link to="/user/sos" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>SOS</p>
          <p>Alert pompier or family</p>
        </div>
      </Link>
      <img className="user-map" src={map} alt="map" />
    </div>
  );
}

export default UserHome;
