import React from "react";
import SectionDivider from "../../componentss/SectionDivider/SectionDivider";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";

const Landing = () => {
  return (
    <div id="home" className="min-w-screen">
      <Home />
      <SectionDivider margin={"-mt-32"} />
      <Services />
      <SectionDivider margin={"mt-20"} />
      <Portfolio />
      <SectionDivider margin={"mt-20"} />
      <Resume />
    </div>
  );
};

export default Landing;
