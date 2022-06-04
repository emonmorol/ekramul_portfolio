import React from "react";
import "./Portfolio.css";

const ProjectCard = ({ project }) => {
  const {
    title,
    image,
    name,
    links: { live, server, client },
  } = project;
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      className="portfolio-card text-accent hover:text-white"
    >
      <div className="text-left">
        <div className="image-content w-full rounded-xl overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div>
          <h2 className="font-semibold text-sm my-4 text-secondary">{title}</h2>
          <h2 className="project-title text-accent font-semibold text-xl my-4">
            {name}
            <i className="title-icon text-secondary ml-2 fa-solid fa-arrow-turn-up"></i>
          </h2>
        </div>
        <div className="button-content flex justify-between mt-5">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="project-button text-[10px] lg:text-[12px]"
          >
            <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
            View Live
          </a>
          <a
            href={client}
            target="_blank"
            rel="noreferrer"
            className="project-button text-[10px] lg:text-[12px]"
          >
            <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
            Client Code
          </a>
          <a
            href={server}
            target="_blank"
            rel="noreferrer"
            className="project-button text-[10px] lg:text-[12px]"
          >
            {" "}
            <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
            Server Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
