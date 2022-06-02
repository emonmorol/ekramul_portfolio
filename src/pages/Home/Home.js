import React from "react";
import ekramul from "../../assets/images/ekramul.png";
import "./Home.css";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="top-content">
        <div className="w-2/3">
          <div>
            <p className=" text-left text-base text-accent">
              wellcome to my world
            </p>
            <p className="font-semibold my-7 text-left text-6xl text-white leading-snug">
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
            <p className="text-left text-base text-accent w-[60ch]">
              Creative problem solver with demonstrated ability to work on
              multiple projects simultaneously.Positive driven and confident
              individual with an apt for learning new technology.{" "}
            </p>
          </div>
          <div className="text-accent flex justify-between pr-36 mt-32">
            <div>
              <h5 className="text-left mb-3 uppercase tracking-wide">
                Find Me
              </h5>
              <div className="flex gap-5">
                <div className="action-box">
                  <a href="">
                    {" "}
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="action-box">
                  <a href="">
                    {" "}
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="action-box">
                  <a href="">
                    {" "}
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-left mb-3 uppercase tracking-wide">
                Best skills
              </h5>
              <div className="flex gap-5">
                <div className="action-box">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className="action-box">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className="action-box">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image w-[32rem] h-[35rem] flex justify-end bg-white relative ">
          <img className="absolute bottom-0" src={ekramul} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
