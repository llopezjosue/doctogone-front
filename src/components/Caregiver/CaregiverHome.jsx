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
          <p>Taches</p>
          <p>2/5 effectuées</p>
        </div>
      </div>
      <Link to="/caregiver/his-planning" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>Son planning</p>
          <p>Ajouter des evenements</p>
        </div>
      </Link>
      <Link to="/caregiver/send-photos" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>Send photos</p>
          <p>name and photos</p>
        </div>
      </Link>
      <Link to="/caregiver/his-infos" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>Ses infos</p>
          <p>santé, adresse</p>
        </div>
      </Link>
      <Link to="/caregiver/his-stats" className="menu-item">
        <div className="img-div">
          <img src={logos} alt="logo" />
        </div>
        <div>
          <p>Statistiques</p>
          <p>compte rendu</p>
        </div>
      </Link>
      <img className="caregiver-map" src={map} alt="map" />
    </div>
  );
}

export default CaregiverHome;
