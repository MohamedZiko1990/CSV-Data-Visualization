import React from "react";

const AxesForm = props => {
  const list = props.headers.map(head => {
    console.log(head);
    return (
      <a className="dropdown-item" href="#" key={head}>
        {head}
      </a>
    );
  });

  return (
    <div>
      <form>
        <div className="form-group">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            >
              Choose "X AXIS"
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {list}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            >
              Choose "Y AXIS"
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {list}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AxesForm;
