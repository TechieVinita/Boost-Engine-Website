import React from "react";
import newsletterBg from "../Assets/Images/newsletter-bg.png";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="newsletter-section"
      style={{ backgroundImage: `url(${newsletterBg})`, width: "1200px", margin: "40px auto", borderRadius: "30px" }}
    >
      <div className="container text-center" style={{display: "flex", flexDirection: "column"}}>
        <h2 className="newsletter-title">
          Subscribe to our newsletter for new product releases, critical updates, and special offers.
        </h2>
        <form className="newsletter-form mt-4">
          <input
            type="email"
            className="newsletter-input"
            placeholder="Email address"
            required
          />
          <button type="submit" className="btn btn-primary" style={{backgroundColor: "black"}}>
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
