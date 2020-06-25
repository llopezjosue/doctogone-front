import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
  },
  colors: [
    "#168d88",
    "#cc223d",
    "#040404",
    "#43ACEA"
  ],
  title: {
    text: null
  },
  yAxis : {
    title: {
      text: "How many times"
    },
    plotLines: [{
      color : "#cc223d",
      width: 2,
      value: 8
    }]
  },
  xAxis : {
    categories: ["July", "Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "June"]
  },
  series: [
    {
      name: "Called for help",
      data: [1, 0, 1, 2, 0, 0, 3, 2, 3, 4, 5, 5]
    },
    {
      name: "Forgot medication",
      data: [3, 4, 3, 5, 5, 5, 7, 8, 7, 8, 9, 10]
    },
    {
      name: "Forgot to eat",
      data: [0, 0, 0, 2, 1, 2, 3, 3, 4, 5, 6, 5]
    }
  ]
};

const Chart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default Chart;