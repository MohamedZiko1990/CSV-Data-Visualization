import React from "react";
import logo from "../Logo/Logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-light d-flex justify-content-around">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="logo" class />
        </a>
        <div className="header flex-grow-1">
          <h1 className="text-center">CSV To Graph Transformer</h1>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
