import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceIProvide = [
    {
      id: 1,
      title: "Mern Development",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris",
      icon: (
        <>
          <i class="fa-solid fa-layer-group"></i>
        </>
      ),
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris",
      icon: (
        <>
          <i class="fa-solid fa-code"></i>
        </>
      ),
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris",
      icon: (
        <>
          <i class="fa-solid fa-server"></i>
        </>
      ),
    },
    {
      id: 4,
      title: "React Development",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris",
      icon: (
        <>
          <i class="fa-brands fa-react"></i>
        </>
      ),
    },
    {
      id: 5,
      title: "Javascript Development",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris",
      icon: (
        <>
          <i class="fa-brands fa-js-square"></i>
        </>
      ),
    },
  ];

  return (
    <div id="services" className="text-white max-w-7xl mx-auto">
      <p className="text-base text-secondary uppercase">Services</p>
      <p className="text-accent font-bold text-6xl mb-10">What I Do </p>
      <div className="grid grid-cols-3 gap-10">
        {serviceIProvide.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
