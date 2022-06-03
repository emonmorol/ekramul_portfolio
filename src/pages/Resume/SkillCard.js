import React from "react";

const SkillCard = ({ skill }) => {
  const { color, icon, name } = skill;
  return (
    <p className="flex items-center relative bottom-0 hover:bottom-2 transition-all duration-300">
      <span className={`${color} mr-2`}>{icon}</span> <span>{name}</span>
    </p>
  );
};

export default SkillCard;
