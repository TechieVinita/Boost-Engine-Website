import React from "react";
import PricingPlanCard from "../Components/PricingPlanCard"; 

const PlansSection = () => {
  const contentPlans = [
    {
      title: "Starter Content Plan",
      price: "₹10,000",
      features: [
        "Basic content writing (5 articles/blogs).",
        "10 posters designed.",
        "Photo or video shoot for up to 10 products.",
        "1 logo or 3 graphic designs.",
        "Social media management for 1 platform.",
        "Flipkart/Amazon basic setup.",
      ],
    },
    {
      title: "Advanced Content Plan",
      price: "₹10,000",
      features: [
        "10 articles/blogs with enhanced quality.",
        "20 posters designed.",
        "Photo or video shoot for 20 products.",
        "2 logos or 5 graphic designs.",
        "Social media management for 2 platforms.",
        "Flipkart/Amazon setup and 1-month product management.",
        "Google Business setup and optimization.",
        "2 motion posters.",
        "5 photo or video edits.",
      ],
    },
    {
      title: "Business Plan",
      price: "₹10,000",
      features: [
        "15 premium articles/blogs.",
        "30 posters designed.",
        "Unlimited product photo or video shoots.",
        "3 logos or 10 graphic designs.",
        "Social media management for up to 3 platforms.",
        "Flipkart/Amazon setup and 2-month product management.",
        "Google Business setup and full support.",
        "5 motion posters.",
        "10 photo or video edits.",
        "Creation of 5 marketing campaigns.",
      ],
    },
  ];

  const techPlans = [
    {
      title: "Basic Tech Plan",
      price: "₹10,000",
      features: [
        "5-page static website design.",
        "Basic website maintenance (1 month).",
        "SEO for 3 keywords.",
        "Basic chatbot integration.",
      ],
    },
    {
      title: "Premium Tech Plan",
      price: "₹10,000",
      features: [
        "10-page dynamic website design.",
        "Responsive and mobile-friendly development.",
        "3 months of website maintenance.",
        "Basic AI tool integration for analytics or chat.",
        "SEO for 5 keywords.",
        "Data analytics dashboard setup.",
      ],
    },
    {
      title: "Ultimate Tech Plan",
      price: "₹10,000",
      features: [
        "Fully customizable dynamic website with unlimited pages.",
        "Advanced website and app development.",
        "6 months of premium website maintenance.",
        "AI-powered features like predictive analytics.",
        "Custom chatbot integration.",
        "Advanced SEO for 10 keywords.",
        "Comprehensive data science services and analytics.",
      ],
    },
  ];

  return (
    <>
        <h2 className="text-center mb-4 white-btn" style={{width: "150px", padding: "10px 30px", margin: "60px auto"}}>Our Plans</h2>
    <section id="plans" className="py-5">
      <div className="container">

        {/* Content Creation Plans */}
        <div className="mb-5">
          <h3 className="text-center mb-3">Content Creation Plans</h3>
          <div className="row">
            {contentPlans.map((plan, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <PricingPlanCard {...plan} />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Services Plans */}
        <div>
          <h3 className="text-center mb-3">Tech Services Plans</h3>
          <div className="row">
            {techPlans.map((plan, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <PricingPlanCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default PlansSection;
