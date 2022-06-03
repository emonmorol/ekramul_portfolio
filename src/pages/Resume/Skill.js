import React from "react";

const Skill = () => {
  const expertise = [
    {
      id: 1,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "HTML5",
      icon: <i class="fa-brands fa-html5"></i>,
      color: "text-red-500",
    },
    {
      id: 3,
      name: "CSS",
      icon: <i class="fa-brands fa-css3"></i>,
      color: "text-blue-500",
    },
    {
      id: 4,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 5,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 6,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 7,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 8,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 9,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
  ];

  const comfortable = [
    {
      id: 1,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 3,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 4,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 5,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 6,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 7,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 8,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 9,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
  ];

  const familiar = [
    {
      id: 1,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 3,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 4,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 5,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 6,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 7,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 8,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 9,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
  ];

  const tools = [
    {
      id: 1,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 3,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 4,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 5,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 6,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 7,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 8,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 9,
      name: "Javascript",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
  ];

  return (
    <div id="skill" className="mt-16">
      <div className="grid grid-cols-2 gap-10">
        <div className="skill-container">
          <h2>Expertise</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {expertise.map((skill) => (
              <p>
                <span className={`${skill.color} mr-2`}>{skill.icon}</span>{" "}
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="skill-container">
          <h2>Comfortable</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {comfortable.map((skill) => (
              <p>
                <span className={`${skill.color} mr-2`}>{skill.icon}</span>{" "}
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="skill-container">
          <h2>Familiar</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {familiar.map((skill) => (
              <p>
                <span className={`${skill.color} mr-2`}>{skill.icon}</span>{" "}
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="skill-container">
          <h2>Tools</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {tools.map((skill) => (
              <p>
                <span className={`${skill.color} mr-2`}>{skill.icon}</span>{" "}
                {skill.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
