import React from "react";
import "./Portfolio.css";

const ProjectCard = ({ project }) => {
  const { title, image } = project;
  return (
    <div className="portfolio-card text-accent hover:text-white">
      <div className="text-left">
        <div className="rounded-xl overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div>
          <h2 className="font-semibold text-sm my-4 text-secondary">{title}</h2>
          <h2 className="project-title font-semibold text-xl my-4">
            {title}
            <i class="title-icon text-secondary ml-2 fa-solid fa-arrow-turn-up"></i>
          </h2>
        </div>
        <div className="button-content flex justify-between mt-5">
          <button className="project-button">
            <i class="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
            View Live
          </button>
          <button className="project-button">
            <i class="text-sm text-secondary mr-2 fa-brands fa-github"></i>
            Client Code
          </button>
          <button className="project-button">
            {" "}
            <i class="text-sm text-secondary mr-2 fa-brands fa-github"></i>
            Server Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
