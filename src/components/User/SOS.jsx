import React from "react";
import Pulse from "react-reveal/Zoom";
import "./SOS.scss";

function SOS() {
  return (
    <div className="sos">
      <div className="group-cards">
        <Pulse>
          <div className="sos-card">
            <div className="header">
              <h1>Other urgency</h1>
            </div>
            <div className="img">
              <img src="/img/sos-health.png"></img>
            </div>
            <div className="footer">
              <button>
                <div> Call urgency </div>

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
              <h1>Other urgency</h1>
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
    </div>
  );
}

export default SOS;
