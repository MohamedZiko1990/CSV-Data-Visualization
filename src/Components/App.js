import React from "react";
import Nav from "./Nav";
import TextForm from "./TextForm";
import AxesForm from "./AxesForm";
import Chart from "./Chart";
import "./App.css";
import { convertCSVToArray } from "convert-csv-to-array";

class App extends React.Component {
  state = {
    objArray: {},
    headers: [],
    xName: "",
    yName: "",
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
    this.setState({
      xAxis: arrayX,
      yAxis: arrayY,
      chart: true,
      xName: x,
      yName: y
    });
  };

  render() {
    return (
      <div class="h-100 d-flex flex-column">
        <div className="row ">
          <header className="col-12 p-0">
            <Nav />
          </header>
        </div>
        <div className="row justify-content-between flex-grow-1">
          <aside className="col-sm-12 col-md-4">
            <div>
              <TextForm onSubmitCSV={this.onDataSubmit} />
            </div>
            <div>
              <AxesForm
                headers={this.state.headers}
                onApply={this.onAxesSelected}
              />
            </div>
          </aside>
          <article className="col-sm-12 col-md-8 pr-3">
            <div>
              <Chart
                xName={this.state.xName}
                yName={this.state.yName}
                xAxisArray={this.state.xAxis}
                yAxisArray={this.state.yAxis}
              />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default App;
