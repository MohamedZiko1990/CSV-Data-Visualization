import React from "react";
import "./TextForm.css";
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
            <label className="text-center">
              <h4 className="text-white">Place your CSV Data:</h4>
              <textarea
                className="form-control"
                rows="5"
                cols="50"
                placeholder="Place your CSV data..."
                onChange={this.onChangeData}
              ></textarea>
            </label>
          </div>
          <div class="text-center">
            <button id="process" type="submit" class="btn btn-success">
              Process
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TextForm;
