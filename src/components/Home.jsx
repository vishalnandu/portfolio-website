import React from "react";
import Profile from "../images/IMG_0002.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home">
      <div className="empty-box">
        <div className="profile-container">
          <div className=" image-container">
            <img
              className="profile-image"
              src={Profile}
              alt="Profile Picture"
            ></img>
            <h5 className="name">Vishal Nandu</h5>
            <p className="degree">Computer Engineer</p>
            <hr></hr>
            <div className="social-media">
              <FontAwesomeIcon icon={faBars} className="hamburger" />
              <FontAwesomeIcon icon={faBars} className="hamburger" />
              <FontAwesomeIcon icon={faBars} className="hamburger" />
            </div>
          </div>
          <div className="info-container">
            <h1 className="info1">Hello!</h1>
            <p className="info2">Welcome to my website</p>
            <button className="resume">resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
