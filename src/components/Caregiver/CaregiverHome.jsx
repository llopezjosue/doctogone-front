import React from "react";
import { Link } from "react-router-dom";
import logos from "../../img/twitter.png";
import map from "../../img/map.jpg";
import "./CaregiverHome.scss";

function CaregiverHome() {
  return (
    <div className="caregiver-home admin-home">
      {/* <div className="menu-item">
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
      </Link> */}

      {/* <div className="copyrigdht">Copyright - 2020 blabvlbavlab</div> */}

      <div>
        <img src="/img/home-admin.png"></img>
      </div>
      <div>
        <div className="menu-item alert">
          <div className="img-div alertimg">
            <img src="/icons/stats.svg" />
          </div>
          <div>
            <h1>5/15 realisers</h1>
            <p>-20% depuis la semaine </p>
          </div>
        </div>
        <Link to="/caregiver/his-planning" className="menu-item">
          <div className="img-div">
            <img src="/img/planning.png" />
          </div>
          <div>
            <h2>His planning</h2>
            <p>mon programme du jour</p>
          </div>
        </Link>
        <Link to="/caregiver" className="menu-item">
          <div className="img-div">
            <img src="/img/relative.png" />
          </div>
          <div>
            <h2>His relatives</h2>
            <p>Add info and photos</p>
          </div>
        </Link>
        <Link to="/caregiver" className="menu-item">
          <div className="img-div">
            <img src="/img/infos.png" />
          </div>
          <div>
            <h2>His info</h2>
            <p>santé, adresse</p>
          </div>
        </Link>
        <Link to="/caregiver/his-stats" className="menu-item">
          <div className="img-div">
            <img src="/img/sos.png" />
          </div>
          <div>
            <h2>Stats</h2>
            <p>Record</p>
          </div>
        </Link>
      </div>

      <div className="copyrigdht">
        Copyright - 2020
        <Link to="/caregiver/chatbot">
          <div>chatbot</div>
        </Link>
      </div>
    </div>
  );
}

export default CaregiverHome;
