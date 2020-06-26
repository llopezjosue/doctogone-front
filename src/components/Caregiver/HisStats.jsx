import React from "react";
import Chart from "./Chart";
import "./Chart.css";
import BackHomeAdmin from "./BackHomeAdmin";

function HisStats() {
  return (
    <div className="stats">
      <h2 className="chartsName">My beloved stats</h2>
      <Chart />
      <div className="stats-container">
        <BackHomeAdmin />
      </div>
    </div>
  );
}

export default HisStats;
