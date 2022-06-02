import React from "react";
import "./Services.css";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="service-card">
      <div className="text-left">
        <p className="text-5xl text-secondary">{icon}</p>
        <h2 className="font-semibold text-2xl my-4">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
