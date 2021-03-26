import React from "react";
import brand from "../images/Brand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//import brand from "../images/IMG_9317.JPG";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg ">
      <a className="navbar-brand" href="#">
        <img className="brand-image" src={brand} alt="brand logo" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} className="hamburger" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Work Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              My Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
