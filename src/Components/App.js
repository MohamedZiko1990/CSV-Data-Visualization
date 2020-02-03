import React from "react";
import { convertCSVToArray } from "convert-csv-to-array";
import TextForm from "./TextForm";
import AxesForm from "./AxesForm";
import Chart from "./Chart";

class App extends React.Component {
  state = {
    objArray: {},
    headers: [],
    xAxis: [],
    yAxis: [],
    chart: false
  };

  onDataSubmit = data => {
    const arrayofObjects = convertCSVToArray(data, {
      separator: ","
    });
    console.log(arrayofObjects);
    if (this.state.chart) {
      this.setState({
        xAxis: [],
        yAxis: [],
        chart: false,
        objArray: arrayofObjects,
        headers: arrayofObjects[0]
      });
    } else {
      this.setState({ objArray: arrayofObjects, headers: arrayofObjects[0] });
    }
  };

  onAxesSelected = (x, y) => {
    var arrayX = [];
    var arrayY = [];
    for (var i = 1; i < this.state.objArray.length; i++) {
      arrayX.push(this.state.objArray[i][x]);
    }
    for (var i = 1; i < this.state.objArray.length; i++) {
      arrayY.push(this.state.objArray[i][y]);
    }
    this.setState({ xAxis: arrayX, yAxis: arrayY, chart: true });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <TextForm onSubmitCSV={this.onDataSubmit} />
          </div>
          <div className="col-6">
            <AxesForm
              headers={this.state.headers}
              onApply={this.onAxesSelected}
            />
          </div>
        </div>
        <div className="row">
          <Chart
            xName={this.state.xName}
            yName={this.state.Name}
            xAxisArray={this.state.xAxis}
            yAxisArray={this.state.yAxis}
          />
        </div>
      </div>
    );
  }
}

export default App;
