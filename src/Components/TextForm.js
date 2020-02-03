import React from "react";

class TextForm extends React.Component {
  state = { data: null };
  onFormSubmit = (event, data) => {
    event.preventDefault();
    console.log(data);
    this.props.onSubmitCSV(data);
  };
  onChangeData = event => {
    console.log(event.target.value);
    this.setState({ data: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="pl-3"
          onSubmit={event => this.onFormSubmit(event, this.state.data)}
        >
          <div className="form-group shadow-textarea">
            <label>
              Place your CSV Data:
              <textarea
                className="form-control"
                rows="3"
                placeholder="Place your data..."
                onChange={this.onChangeData}
              ></textarea>
            </label>
          </div>
          <button type="submit">Process</button>
        </form>
      </div>
    );
  }
}

export default TextForm;
