// ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, image, description }) => {
  return (
    <div className="card mb-4 shadow-sm service-card">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
