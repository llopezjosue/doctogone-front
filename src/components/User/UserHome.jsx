import React from "react";
import { Link } from "react-router-dom";

import "./UserHome.scss";

function UserHome() {
  return (
    <div className="user-home">
      <div>
        <img src="/img/home-alert.png"></img>
      </div>
      <div>
        <div className="menu-item alert">
          <div className="img-div alertimg">
            <img src="/img/alert.png" />
          </div>
          <div>
            <h1>in 5 minutes</h1>
            <p>visite de l'infirmière</p>
          </div>
        </div>
        <Link to="/user/my-planning" className="menu-item">
          <div className="img-div">
            <img src="/img/planning.png" />
          </div>
          <div>
            <h2>My planning</h2>
            <p>mon programme du jour</p>
          </div>
        </Link>
        <Link to="/user/my-relatives" className="menu-item">
          <div className="img-div">
            <img src="/img/relative.png" />
          </div>
          <div>
            <h2>My relatives</h2>
            <p>name and photos</p>
          </div>
        </Link>
        <Link to="/user/my-infos" className="menu-item">
          <div className="img-div">
            <img src="/img/infos.png" />
          </div>
          <div>
            <h2>My infos</h2>
            <p>santé, adresse</p>
          </div>
        </Link>
        <Link to="/user/sos" className="menu-item">
          <div className="img-div">
            <img src="/img/sos.png" />
          </div>
          <div>
            <h2>SOS</h2>
            <p>Alert pompier or family</p>
          </div>
        </Link>
      </div>

      <div className="copyright">Copyright - 2020 blabvlbavlab</div>
    </div>
  );
}

export default UserHome;
