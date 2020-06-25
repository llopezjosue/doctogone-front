import React from "react";
import Chart from "./Chart"
import "./Chart.css";

function HisStats() {
  return <div className="stats">
    <h2 className="chartsName">My beloved stats</h2>
    <Chart />
  </div>;
}

export default HisStats;
