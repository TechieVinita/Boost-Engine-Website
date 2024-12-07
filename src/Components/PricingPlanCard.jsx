import React from "react";
import arrowUp from "../Assets/Images/arrow-up.png"; 
import blueArrowUp from "../Assets/Images/blue-arrow-up.png"; 


const PricingPlanCard = ({ title, price, features }) => {
  return (
    <div className="pricing-card">
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-price">{price}</h6>
      </div>
      <hr></hr>
      <div className="card-body">
        <ul className="card-features">
          {features.map((feature, index) => (

            <div style={{display: "flex", gap: "15px"}}>
                <img 
                src={blueArrowUp} 
                alt="Arrow"
                style = {{
                  width: "14px",
                  height: "18px"
                }}
                />
                <li key={index}>

                  {feature}
                  </li>

              </div>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <button className="btn ">
        Get Started
                <img 
                  src={arrowUp} 
                  alt="Arrow" 
                  style={{ marginLeft: "10px", width: "20px", verticalAlign: "middle" }} 
                />
        </button>
      </div>
    </div>
  );
};

export default PricingPlanCard;
