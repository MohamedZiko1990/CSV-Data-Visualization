import React from "react";
import "./Chart.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Chart extends React.Component {
  state = { mode: "spline" };

  onClickSpline = () => {
    this.setState({ mode: "spline" });
  };

  onClickBar = () => {
    this.setState({ mode: "bar" });
  };

  onClickColumn = () => {
    this.setState({ mode: "column" });
  };

  render() {
    const config = {
      chart: {
        type: `${this.state.mode}`
      },
      title: {
        text: `(${this.props.yName}/${this.props.xName})`
      },
      xAxis: {
        categories: this.props.xAxisArray,
        title: this.props.xName
      },
      series: [
        {
          name: this.props.yName,
          data: this.props.yAxisArray
        }
      ]
    };
    return (
      <div>
        <div id="chart">
          <HighchartsReact highcharts={Highcharts} options={config} />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button class="btn btn-success" onClick={this.onClickBar}>
            Bar
          </button>
          <button class="btn btn-success ml-2" onClick={this.onClickSpline}>
            Spline
          </button>
          <button class="btn btn-success ml-2" onClick={this.onClickColumn}>
            Column
          </button>
        </div>
      </div>
    );
  }
}

export default Chart;
