import React from "react";

class AxesForm extends React.Component {
  state = { xAxis: "", yAxis: "" };

  onFormSubmit = (event, x, y) => {
    event.preventDefault();
    this.props.onApply(x, y);
  };
  onChangeXAxis = event => {
    this.setState({ xAxis: event.target.value });
  };

  onChangeYAxis = event => {
    this.setState({ yAxis: event.target.value });
  };

  render() {
    const list = this.props.headers.map(head => {
      console.log(head);
      return (
        <option value={head} href="#" key={head}>
          {head}
        </option>
      );
    });
    return (
      <div>
        <form
          onSubmit={event =>
            this.onFormSubmit(event, this.state.xAxis, this.state.yAxis)
          }
        >
          <div className="form-group">
            <select onChange={this.onChangeXAxis} value={this.state.xAxis}>
              <option value="">Choose X-Axis</option>
              {list}
            </select>
          </div>
          <div className="form-group">
            <select onChange={this.onChangeYAxis} value={this.state.yAxis}>
              <option value="">Choose Y-Axis</option>
              {list}
            </select>
          </div>
          <button type="submit" className="btn btn-secondary">
            Apply
          </button>
        </form>
      </div>
    );
  }
}

export default AxesForm;
