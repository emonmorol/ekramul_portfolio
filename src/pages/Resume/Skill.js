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
      name: "React.Js",
      icon: <i class="fa-brands fa-react"></i>,
      color: "text-blue-500",
    },
    {
      id: 5,
      name: "ES6",
      icon: (
        <span className="text-[8px] pt-1.5 pl-1.5 pb-0.5 pr-0.5 rounded bg-yellow-500">
          <i class="fa-solid fa-e"></i>
          <i class="fa-solid fa-s"></i>
          <i class="fa-solid fa-6"></i>
        </span>
      ),
      color: "text-black",
    },
    {
      id: 6,
      name: "Tailwind",
      icon: (
        <svg
          className="inline"
          width="18px"
          height="16px"
          viewBox="0 0 256 154"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient
              x1="-2.77777778%"
              y1="32%"
              x2="100%"
              y2="67.5555556%"
              id="linearGradient-1"
            >
              <stop stop-color="#2298BD" offset="0%"></stop>
              <stop stop-color="#0ED7B5" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
              fill="url(#linearGradient-1)"
            ></path>
          </g>
        </svg>
      ),
      color: "",
    },
    {
      id: 7,
      name: "Rest API",
      icon: "",
      color: "text-yellow-500",
    },
    {
      id: 8,
      name: "Express.js",
      icon: (
        <span className="text-[8px] pt-2 pl-2 pb-0.5 pr-0.5 rounded bg-yellow-500">
          <i class="fa-solid fa-e"></i>
          <i class="fa-solid fa-x"></i>
        </span>
      ),
      color: "text-black",
    },
  ];

  const comfortable = [
    {
      id: 1,
      name: "Node.js",
      icon: <i class="fa-brands fa-node"></i>,
      color: "text-green-500",
    },
    {
      id: 2,
      name: "MongoDB",
      icon: <i class="fa-brands fa-envira"></i>,
      color: "text-green-500",
    },
    {
      id: 3,
      name: "Bootstrap",
      icon: (
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 256 256"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z"
              fill="#563D7C"
            ></path>
            <path
              d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z"
              fill="#FFFFFF"
            ></path>
          </g>
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 4,
      name: "React Query",
      icon: <i class="fa-brands fa-react"></i>,
      color: "text-red-500",
    },
    {
      id: 5,
      name: "Axios",
      icon: "",
      color: "text-yellow-500",
    },
    {
      id: 6,
      name: "DaisyUI",
      icon: <i class="fa-solid fa-fan"></i>,
      color: "text-yellow-500",
    },
  ];

  const familiar = [
    {
      id: 1,
      name: "Typescript",
      icon: <></>,
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "React Native",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 3,
      name: "Mongoose",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 4,
      name: "Next.Js",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 5,
      name: "MaterialUI",
      icon: <i class="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 6,
      name: "Framer Motion",
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
              <p className="flex items-center">
                <span className={`${skill.color} mr-2`}>{skill.icon}</span>{" "}
                <span>{skill.name}</span>
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
