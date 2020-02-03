import React from "react";
import { convertCSVToArray } from "convert-csv-to-array";
import TextForm from "./TextForm";

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
        <TextForm onSubmitCSV={this.onDataSubmit} />
      </div>
    );
  }
}

export default App;
