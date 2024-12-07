import React from "react";
import logo from "../Assets/Images/boost-engine-logo.png";
import profileIcon from "../Assets/Images/profile-icon.png";  

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#02002f" }}>
      <div className="container">
        <a className="navbar-brand" href="https://boostengine.in/">
          <img
            src={logo}
            alt="Boost Engine Logo"
            style={{ height: "70px" }}
            className="img-fluid"
          />
        </a>
    
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#what-we-do">
                What We Do
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blogs">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#career">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us" style={{ backgroundColor: "#ffffff", color: "#000000", borderRadius: "5px", padding: "8px 17px" }}>
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#profile">
                <img
                  src={profileIcon}  
                  alt="Profile"
                  style={{ height: "25px", width: "25px" }}  
                  className="img-fluid"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
