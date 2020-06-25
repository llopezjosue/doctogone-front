import React from "react";
import Pulse from "react-reveal/Zoom";
import BtnBack from "../Elements/BtnBack";
import "./SOS.scss";

function SOS() {
  return (
    <div className="sos">
      <div className="group-cards">
        <Pulse>
          <div className="sos-card">
            <div className="header">
              <h1>Life-Threatening Emergency</h1>
            </div>
            <div className="img">
              <img src="/img/sos-health.png"></img>
            </div>
            <div className="footer">
              <button>
                <div> Call Emergency </div>

                <div className="icon">
                  <img src="/icons/phone.svg"></img>
                </div>
              </button>
            </div>
          </div>
        </Pulse>

        <Pulse>
          <div className="sos-card">
            <div className="header">
              <h1>Other Emergency </h1>
            </div>
            <div className="img">
              <img src="/img/sos-family.png"></img>
            </div>
            <div className="footer">
              <button>
                <div> Call my family </div>
                <div className="icon">
                  <img src="/icons/phone.svg"></img>
                </div>
              </button>
            </div>
          </div>
        </Pulse>
      </div>

      <BtnBack/>
    </div>
  );
}

export default SOS;
