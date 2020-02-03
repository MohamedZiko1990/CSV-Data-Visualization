import React from "react";
import { convertCSVToArray } from "convert-csv-to-array";
import TextForm from "./TextForm";
import AxesForm from "./AxesForm";

class App extends React.Component {
  state = { objArray: null, headers: [] };

  onDataSubmit = data => {
    const arrayofObjects = convertCSVToArray(data, {
      separator: ","
    });
    console.log(arrayofObjects);
    console.log(arrayofObjects[0]);
    this.setState({ objArray: arrayofObjects, headers: arrayofObjects[0] });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <TextForm onSubmitCSV={this.onDataSubmit} />
          </div>
          <div className="col-6">
            <AxesForm headers={this.state.headers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
