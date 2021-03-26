import React from "react";

function Home() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="brand">
          <a href="#">MY PORTFOLIO</a>
        </div>
        <div className="tabs-container">
          <button className="tabs-button">ABOUT ME</button>
          <button className="tabs-button">CONTACT ME</button>
          <button className="tabs-button">PROJECTS</button>
        </div>
      </div>
      <div className="empty-box">
        <div className="profile-container">
          <div className="image-container"></div>
          <div className="info-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
