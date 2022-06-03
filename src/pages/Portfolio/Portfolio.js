import React from "react";
import ProjectCard from "./ProjectCard";
import forge from "../../assets/images/forge-the-drill.web.app.png";

const Portfolio = () => {
  const projects = [
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
      image: forge,
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
      image:
        "https://www.flexgigzz.com/wp-content/uploads/2021/04/bexer-bootstrap-business-template.jpg",
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
      image:
        "https://www.flexgigzz.com/wp-content/uploads/2021/04/bexer-bootstrap-business-template.jpg",
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
      image:
        "https://www.flexgigzz.com/wp-content/uploads/2021/04/bexer-bootstrap-business-template.jpg",
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
      image:
        "https://www.flexgigzz.com/wp-content/uploads/2021/04/bexer-bootstrap-business-template.jpg",
    },
    {
      id: 6,
      title: "Javascript Development",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris",
      icon: (
        <>
          <i class="fa-brands fa-js-square"></i>
        </>
      ),
      image:
        "https://www.flexgigzz.com/wp-content/uploads/2021/04/bexer-bootstrap-business-template.jpg",
    },
  ];

  return (
    <div id="portfolio" className="text-white max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-base text-secondary uppercase">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <p className="text-accent font-bold text-6xl mb-10">Portfolio</p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
