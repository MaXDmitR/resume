import React from "react";
import "../../styles/Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="videos/background.mp4" type="video/mp4" />
      </video>

      <div className="header-content">
        <h1>Frontend Developer</h1>
        <p>BOOTSTRAP • REACT JS • JAVA • GITHUB</p>
      </div>
    </header>
  );
};

export default Header;
