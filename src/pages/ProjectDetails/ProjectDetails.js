import React from "react";
import { useParams } from "react-router-dom";
import forge from "../../assets/images/forge-the-drill.web.app.png";
import bagsq from "../../assets/images/bagsq12.png";
import blood from "../../assets/images/blood-buddies-donation.png";
import { useEffect } from "react";
import { useState } from "react";
import "./PorjectDetails.css";
import ScreenShotModal from "./ScreenShotModal";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openedImage, setOpenedImage] = useState("");

  const projects = [
    {
      id: 1,
      title: "Forge The Drill",
      name: "Manufacturer Company Web App",
      description: [
        "This site includes a firebase email-password-based and google authentication system.",
        "This site has different features for different roles. There is two role admin and user.",
        "You can pay using your credit card.",
        "For an admin role user there in the dashboard he can cancel any unpaid order . make other admin and my profile page.",
        "This site is protected using JsonWebToken",
      ],
      image: forge,
      links: {
        live: "https://forge-the-drill.web.app/",
        client: "https://github.com/emonmorol/forge-the-drill",
        server: "https://github.com/emonmorol/forge-the-drill-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "MongoDB",
        "Stripe",
      ],
      screenshots: [
        "https://i.ibb.co/wZqqnBQ/Screenshot-2022-06-12-140455.png",
        "https://i.ibb.co/tZtnCHr/Screenshot-2022-06-12-140412.png",
        "https://i.ibb.co/ZNCpcs6/Screenshot-2022-06-12-140548.png",
        "https://i.ibb.co/7bdhspv/Screenshot-2022-06-12-140346.png",
      ],
    },
    {
      id: 2,
      title: "BagsQ",
      name: "Stock Control And Product Management Website",
      description: [
        "User can maintain their products in all aspects.",
        "User can store their product information in the database.",
        "User Can update stocks and also can add product , and can remove products.",
        "You can see user reviews . what they think about us and how they feel.",
        "Here You can see all our team members and how many companies inventory we manage.",
      ],
      image: bagsq,
      links: {
        live: "https://bagsq12.web.app/",
        client: "https://github.com/emonmorol/bagsq-client",
        server: "https://github.com/emonmorol/bagsq-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "MongoDB",
      ],
      screenshots: [
        "https://i.ibb.co/GpGfMYs/Screenshot-2022-06-12-150637.png",
        "https://i.ibb.co/n6b7jzY/Screenshot-2022-06-12-150535.png",
        "https://i.ibb.co/Sfx30cp/Screenshot-2022-06-12-150511.png",
        "https://i.ibb.co/2KFPXKR/Screenshot-2022-06-12-150738.png",
      ],
    },
    {
      id: 3,
      title: "Blood Buddies",
      name: "Blood Donation And Blood Receiving site",
      description: [
        "Here people can donate blood and can take blood when needed.",
        "Here You can search blood based on blood group.",
        "You can see who needs blood in your area.",
        "This site is protected using JsonWebToken",
        "An user cannot donate twice in 3 months",
      ],
      image: blood,
      links: {
        live: "https://blood-buddies-donation.web.app/",
        client: "https://github.com/emonmorol/blood_boddies",
        server: "https://github.com/emonmorol/blood-buddies-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "MongoDB",
        "Stripe",
      ],
      screenshots: [
        "https://i.ibb.co/VCC2LPR/Screenshot-2022-06-12-151116.png",
        "https://i.ibb.co/fMcj7Wz/Screenshot-2022-06-12-151053.png",
        "https://i.ibb.co/Jzp4W7H/Screenshot-2022-06-12-151511.png",
        "https://i.ibb.co/pP17B8H/Screenshot-2022-06-12-151445.png",
      ],
    },
  ];

  useEffect(() => {
    const project = projects.find((x) => x.id === +id);
    setProject(project);
    console.log(project);
  }, [id]);

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      className="detail-card flex flex-col lg:min-h-screen p-5 lg:p-40 hover:text-white"
    >
      <div className="inside-detail flex flex-col lg:flex-row justify-center items-start gap-8 lg:h-[60vh] text-left mb-32">
        <div className="image-detail w-full h-80 lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
          <img src={project.image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
          <div>
            <h2 className="font-semibold text-sm my-4 text-secondary">
              {project.title}
            </h2>
            <h2 className="project-title text-accent font-semibold text-xl my-4">
              {project.name}
            </h2>
            <div className="my-5">
              <h3 className=" text-secondary">Project Overview</h3>
              {project?.description?.map((point, index) => (
                <p key={index} className="text-accent">
                  {index + 1}. {point}
                </p>
              ))}
            </div>
            <div className="my-5">
              <h3 className=" text-secondary">Technology used</h3>
              <div className="flex flex-wrap gap-4">
                {project?.technology?.map((point, index) => (
                  <span key={index} className="text-accent hover:none btn">
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="button-content flex justify-between mt-5">
            <a
              href={project?.links?.live}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
              View Live
            </a>
            <a
              href={project?.links?.client}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Client Code
            </a>
            <a
              href={project?.links?.server}
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

      <div>
        <p className="text-accent text-center font-bold text-xl lg:text-5xl mb-10">
          Project Screenshots
        </p>
        <div className="screenshot w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {project?.screenshots?.map((screenshot) => (
            <button
              onClick={() => {
                setOpenedImage(screenshot);
                setIsOpen(true);
              }}
            >
              <img className="w-full rounded-3xl" src={screenshot} alt="" />
            </button>
          ))}
        </div>
      </div>
      {modalIsOpen && (
        <ScreenShotModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          openedImage={openedImage}
        />
      )}
    </div>
  );
};

export default ProjectDetails;
