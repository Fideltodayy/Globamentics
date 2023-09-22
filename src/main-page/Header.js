import React from "react";
import logo from "./GloboLogo.png";
import { Link } from "react-router-dom";

const Header = ({ subtitle }) => {
  return (
    <header className="header-container">
      <div className="col-md-5">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="col-md-7 d-none d-sm-block mt-5 subtitle">{subtitle}</div>
    </header>
  );
};

export default Header;
