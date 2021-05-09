import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.VoidFunctionComponent = () => {
  return (
    <div className="d-flex align-items-start justify-content-between">
      <Link
        to="/"
        className="left-nav d-flex align-items-center justify-content-center hoverable react-link"
      >
        <div className="icon-container">
          <FontAwesomeIcon icon={faCat} className="icon mt-6" />
        </div>
        <h3 className="mt-1">Litter</h3>
      </Link>
      <div className="right-nav d-flex justify-content-end align-items-center">
        <Link to="/about" className="hoverable react-link">
          <h3>ABOUT</h3>
        </Link>
        <Link to="/contact" className="hoverable react-link">
          <h3>CONTACT</h3>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
