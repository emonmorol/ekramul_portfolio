import React from "react";
import ProjectCard from "./ProjectCard";
import forge from "../../assets/images/forge-the-drill.web.app.png";
import bagsq from "../../assets/images/bagsq12.png";
import blood from "../../assets/images/blood-buddies-donation.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Forge The Drill",
      name: "Manufacturer Company Web App",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris",
      image: forge,
      links: {
        live: "https://forge-the-drill.web.app/",
        client: "https://github.com/emonmorol/forge-the-drill",
        server: "https://github.com/emonmorol/forge-the-drill-server",
      },
    },
    {
      id: 2,
      title: "BagsQ",
      name: "Stock Control And Product Management Website",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris",
      image: bagsq,
      links: {
        live: "https://bagsq12.web.app/",
        client: "https://github.com/emonmorol/bagsq-client",
        server: "https://github.com/emonmorol/bagsq-server",
      },
    },
    {
      id: 3,
      title: "Blood Buddies",
      name: "Blood Donation And Blood Receiving site",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris",
      image: blood,
      links: {
        live: "https://blood-buddies-donation.web.app/",
        client: "https://github.com/emonmorol/blood_boddies",
        server: "https://github.com/emonmorol/blood-buddies-server",
      },
    },
  ];

  return (
    <div id="portfolio" className="text-white max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-xs lg:text-sm text-secondary uppercase">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <p className="text-accent font-bold text-3xl lg:text-5xl mb-10">
          My Full Stack Projects
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
