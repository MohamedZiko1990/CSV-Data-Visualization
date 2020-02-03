import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = props => {
  const config = {
    chart: {
      type: "spline"
    },
    title: {
      text: `MyChart`
    },
    xAxis: {
      categories: props.xAxisArray
    },
    series: [
      {
        data: props.yAxisArray
      }
    ]
  };

  return (
    <div className="m-auto pt-5">
      <HighchartsReact highcharts={Highcharts} options={config} />
    </div>
  );
};

export default Chart;
