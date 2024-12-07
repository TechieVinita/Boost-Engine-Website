
import React from "react";
import Header from "../Components/Header";
import AboutUs from "../Components/AboutUs";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import ServiceCard from "../Components/ServiceCard";
import PricingPlanCard from "../Components/PricingPlanCard";
import FAQAccordion from "../Components/FAQAccordion";
import PlansSection from "../Components/PlansSection";
import Blogs from "../Components/Blogs";
import Gallery from "../Components/Gallery";
import heroImg from "../Assets/Images/hero-img.png"; 
import arrowUp from "../Assets/Images/arrow-up.png"; 
import service1 from "../Assets/Images/service-1.png";
import service2 from "../Assets/Images/service-2.png";
import service3 from "../Assets/Images/service-3.png";
import service4 from "../Assets/Images/service-4.png";
import service5 from "../Assets/Images/service-5.png";
import service6 from "../Assets/Images/service-6.png";

const Home = () => {
  const services = [
    {
      title: "Custom Software Development",
      image: service1,
      description: "Tailored software for your business needs.",
    },
    {
      title: "Web & Mobile App Development",
      image: service2,
      description: "Responsive and robust web/mobile apps.",
    },
    {
      title: "Digital Marketing Solutions",
      image: service3,
      description: "Helping businesses build their brand and reach a larger audience.",
    },
    {
      title: "Cloud Solutions",
      image: service4,
      description: "Providing scalable cloud-based services for enhanced flexibility.",
    },
    {
      title: "IT Consulting & Strategy",
      image: service5,
      description: "Expert advice to help you make informed technology decisions.",
    },
    {
      title: "Cybersecurity Solutions",
      image: service6,
      description: "Protecting your business from evolving digital threats.",
    }
  ];

  const pricingPlans = [
    {
      plan: "Starter Plan",
      price: "$99/month",
      features: ["Feature 1", "Feature 2"],
    },
    {
      plan: "Advanced Plan",
      price: "$199/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="hero py-5" style={{ backgroundColor: "#02002f" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Text on the left */}
            <div className="col-md-6 text-start">
              <h1 className="display-4 fw-bold text-light">Boost Engine Solutions</h1>
              <p className="lead text-light">
                Navigating Success in the Digital Era: Your Partner for Growth and Innovation.
              </p>

              <button className="btn btn-primary btn-lg mt-3 hero-btn">
                Get Started
                <img 
                  src={arrowUp} 
                  alt="Arrow" 
                  style={{ marginLeft: "10px", width: "20px", verticalAlign: "middle" }} 
                />
              </button>
            </div>
            {/* Image on the right */}
            <div className="col-md-6 text-center">
              <img
                src={heroImg}
                alt="Hero"
                className="img-fluid"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs /> 

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <div className="text-center white-btn" style={{ width: "180px" }}>Our Services</div>
          <div className="row mt-4">
            {services.map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <PlansSection />

      {/* FAQ Section */}
      <section id="faq" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>

      <Blogs />

      <Gallery />
      <div style={{display: "flex", justifyContent: "center", marginBottom: "40px"}}>
      <button className="btn btn-primary btn-lg mt-3 hero-btn">
                View our work
                <img 
                  src={arrowUp} 
                  alt="Arrow" 
                  style={{ marginLeft: "10px", width: "20px", verticalAlign: "middle" }} 
                />
              </button>
      </div>

      <Newsletter />

      <Footer />
    </>
  );
};

export default Home;
