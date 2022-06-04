import React, { useState } from "react";
import Education from "./Education";
import "./Resume.css";
import Skill from "./Skill";
import Trainee from "./Trainee";

const Resume = () => {
  const [skill, setSkill] = useState(true);
  const [education, setEducation] = useState(false);
  const [trainee, setTrainee] = useState(false);

  const handleSkill = () => {
    setSkill(true);
    setEducation(false);
    setTrainee(false);
  };
  const handleEducation = () => {
    setSkill(false);
    setEducation(true);
    setTrainee(false);
  };
  const handleTrainee = () => {
    setSkill(false);
    setEducation(false);
    setTrainee(true);
  };

  return (
    <div id="resume" className="text-white max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-xs lg:text-sm  text-secondary uppercase">
          Ekramul hasan
        </p>
        <p className="text-accent font-bold text-3xl lg:text-5xl mb-10">
          My Projects
        </p>
      </div>
      <div className="min-h-[50vh]">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="tab-button-content w-full"
        >
          <label
            onClick={handleSkill}
            className={`tab-button py-7 px-14  text-xs lg:text-base ${
              skill && "active-tab"
            } w-1/3`}
          >
            Profession Skills
          </label>
          <label
            onClick={handleEducation}
            className={`tab-button py-7 px-14  text-xs lg:text-base ${
              education && "active-tab"
            } w-1/3`}
            aria-current="page"
          >
            Education
          </label>
          <label
            onClick={handleTrainee}
            className={`tab-button py-7 px-14  text-xs lg:text-base ${
              trainee && "active-tab"
            } w-1/3`}
          >
            Professional Trainee
          </label>
        </div>
        <div>
          <div id="skill" className={`${skill ? "block" : "hidden"}`}>
            <Skill />
          </div>
          <div id="education" className={`${education ? "block" : "hidden"}`}>
            <Education />
          </div>
          <div id="trainee" className={`${trainee ? "block" : "hidden"}`}>
            <Trainee />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
