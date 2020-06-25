import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./HisStats.css";

const options = {
  chart: {
    type: "spline"
  },
  title: {
    text: "My beloved stats"
  },
  series: [
    {
      label: "Called for help",
      data: [1, 0, 1, 2, 0, 0, 3, 2, 3, 4, 5, 5]
    },
    {
      label: "Forgot medication",
      data: [3, 4, 3, 5, 5, 5, 7, 8, 7, 8, 9, 10]
    },
    {
      label: "Forgot to eat",
      data: [0, 0, 0, 2, 0, 0, 3, 3, 3, 4, 5, 5]
    }
  ]
};

const Chart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default Chart;