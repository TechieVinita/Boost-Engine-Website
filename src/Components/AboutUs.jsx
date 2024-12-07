import React from "react";
import aboutUsImage from "../Assets/Images/about-us-image.png"; 
import arrowUp from "../Assets/Images/arrow-up.png"; 


const AboutUs = () => {
  return (
    <section id="about-us" className="py-5">
      <div className="container">
        <div>
            <div class="text-center white-btn">Know more about Us</div>
            <h2 className="text-center mb-4">The Journey of Boost Engine</h2> 
        </div>

        <div className="row"  style={{margin: "70px auto"}}>         
          {/* Left Column - Text Content */}
          <div className="col-md-6 left-div">
            <p className="lead">
              The Story of Boost Engine is one of innovation and determination. Founded with the vision to empower modern businesses through technology, Boost Engine has been at the forefront of providing cutting-edge solutions since its inception. Established on August 5, 2023, Boost Engine believes that true success is driven by the impact technology can have on transforming ideas into reality. With a strong commitment to excellence, Boost Engine has become a trusted partner for businesses seeking to leverage the power of technology to drive growth and innovation.
            </p>
            <button className="btn btn-primary btn-lg mt-3 hero-btn">
            Learn more
            <img 
                    src={arrowUp} 
                    alt="Arrow" 
                    style={{ marginLeft: "10px", width: "20px", verticalAlign: "middle"}} // Adjust arrow size and spacing
                    />
            </button>
          </div>
          {/* Right Column - Image */}
          <div className="col-md-6 about-us-img">
            <img
              src={aboutUsImage}
              alt="About Boost Engine"
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "cover", "margin-left": "180px" }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
