import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./UserHome.scss";

function UserHome({ alertClick, setAlertClick }) {
  useEffect(() => {
    setTimeout(() => {
      setAlertClick(true);
    }, 1500);
  }, []);

  return (
    <div className="user-home">
      <div>
        <img src="/img/home-alert.png"></img>
      </div>
      <div>
        {!alertClick ? (
          <div className="menu-item alert">
            <div className="img-div alertimg">
              <img src="/img/alert.png" />
            </div>
            <div>
              <h1>In 1 minute</h1>
              <p>Take my medication</p>
            </div>
          </div>
        ) : (
          <div className="menu-item alert">
            <div className="img-div alertimg">
              <img src="/img/alert.png" />
            </div>
            <div>
              <h1>In 35 minutes</h1>
              <p>Take one Exelon</p>
            </div>
          </div>
        )}
        <Link to="/user/my-planning" className="menu-item">
          <div className="img-div">
            <img src="/img/planning.png" />
          </div>
          <div>
            <h2>My Planning</h2>
            <p>Daily Programm</p>
          </div>
        </Link>
        <Link to="/user/my-relatives" className="menu-item">
          <div className="img-div">
            <img src="/img/relative.png" />
          </div>
          <div>
            <h2>My Relatives</h2>
            <p>Names and Photos</p>
          </div>
        </Link>
        <Link to="/user/my-infos" className="menu-item">
          <div className="img-div">
            <img src="/img/infos.png" />
          </div>
          <div>
            <h2>My Infos</h2>
            <p>Address & Health</p>
          </div>
        </Link>
        <Link to="/user/sos" className="menu-item">
          <div className="img-div">
            <img src="/img/sos.png" />
          </div>
          <div>
            <h2>SOS</h2>
            <p>Alert Emergency or Family</p>
          </div>
        </Link>
      </div>

      <div className="copyrigdht">Copyright - 2020 Finding Memo</div>
    </div>
  );
}

export default UserHome;
