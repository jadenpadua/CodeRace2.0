import React from "react";
import "./Navbar.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.VoidFunctionComponent = () => {
  return (
    <div className="d-flex align-items-start justify-content-between">
      <div className="left-nav d-flex align-items-center justify-content-center">
        <div className="icon-container">
          <FontAwesomeIcon icon={faCat} className="icon mt-6" />
        </div>
        <h3 className="mt-1">Litter</h3>
      </div>
      <div className="right-nav d-flex justify-content-end align-items-center">
        <h3>ABOUT</h3>
        <h3>CONTACT</h3>
      </div>
    </div>
  );
};
export default Navbar;
