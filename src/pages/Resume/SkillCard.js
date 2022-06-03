import React from "react";

const SkillCard = ({ skill }) => {
  const { color, icon, name } = skill;
  return (
    <p className="flex items-center">
      <span className={`${color} mr-2`}>{icon}</span> <span>{name}</span>
    </p>
  );
};

export default SkillCard;
