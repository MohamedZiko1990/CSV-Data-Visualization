import React from "react";

class AxesForm extends React.Component {
  state = { xAxis: " ", yAxis: " " };

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
          className="pl-3"
          onSubmit={event =>
            this.onFormSubmit(event, this.state.xAxis, this.state.yAxis)
          }
        >
          <div className="mt-5 text-center">
            <div className="form-group">
              <label>
                <h5 className="text-white">Choose X-Axis</h5>
                <select onChange={this.onChangeXAxis} value={this.state.xAxis}>
                  <option value="">----------------</option>
                  {list}
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                <h5 className="text-white">Choose y-Axis</h5>
                <select onChange={this.onChangeYAxis} value={this.state.yAxis}>
                  <option value="">----------------</option>
                  {list}
                </select>
              </label>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" className="btn btn-success">
              Apply
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AxesForm;
