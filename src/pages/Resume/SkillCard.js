import React from "react";

const SkillCard = ({ skill }) => {
  const { color, icon, name } = skill;
  return (
    <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
      <p className="flex items-center relative bottom-0 hover:bottom-2 transition-all duration-300">
        <span className={`${color} mr-2`}>{icon}</span>
        <span className="">{name}</span>
      </p>
    </div>
  );
};

export default SkillCard;
