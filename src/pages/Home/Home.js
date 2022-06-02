import React from "react";
import ekramul from "../../assets/images/ekramul.png";
import "./Home.css";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="min-h-screen p-5">
      <div className="top-content flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-2/3">
          <div>
            <p className=" text-left text-base text-accent">
              wellcome to my world
            </p>
            <p className="font-semibold my-7 text-left text-4xl lg:text-6xl text-white leading-snug">
              Hi, I'm <span className="text-secondary">Ekramul Hasan</span>
              <br />
              <span>
                <Typed
                  strings={[
                    "A MERN Developer",
                    "A Frontend Developer",
                    "A Backend Developer",
                    "A React.JS Developer",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </p>
            <p className="text-left text-base text-accent w-full lg:w-[60ch]">
              Creative problem solver with demonstrated ability to work on
              multiple projects simultaneously.Positive driven and confident
              individual with an apt for learning new technology.{" "}
            </p>
          </div>
          <div className="text-accent flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between pr-0 lg:pr-36 mt-32">
            <div>
              <h5 className="text-left mb-3 uppercase tracking-wide">
                Find Me
              </h5>
              <div className="flex gap-5">
                <a
                  href="https://github.com/emonmorol"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="action-box">
                    {" "}
                    <i class="fa-brands fa-github"></i>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ekramul-hasan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="action-box">
                    {" "}
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/ekramul.hasan.morol/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="action-box">
                    {" "}
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-left mb-3 uppercase tracking-wide">
                Best skills
              </h5>
              <div className="flex gap-5">
                <div className="action-box text-blue-500">
                  <i class="fa-brands fa-react"></i>
                </div>
                <div className="action-box text-yellow-500">
                  <i class="fa-brands fa-js-square"></i>
                </div>
                <div className="action-box text-blue-500">
                  <i class="fa-brands fa-css3-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image w-[22rem] lg:w-[32rem] h-[25rem] lg:h-[35rem] flex justify-end bg-white relative mb-20 lg:mt-0">
          <img className="absolute bottom-0" src={ekramul} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
