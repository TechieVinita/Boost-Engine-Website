import React from "react";
import logo from "../Assets/Images/boost-engine-logo.png";


const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row" style={{margin: "0 auto"}}>

        {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <a className="navbar-brand" href="https://boostengine.in/">
            <img
                src={logo}
                alt="Boost Engine Logo"
                style={{ height: "70px" }}
                className="img-fluid"
            />
            </a>
            <p>
            The Story Of Boost Engine is one of the innovation and determination.
            </p>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Home</h5>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">What we do</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">More</h5>
            <ul className="footer-list">
              <li><a href="#">Projects</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Connect</h5>
            <ul className="footer-list">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
