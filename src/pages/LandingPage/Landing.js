import React from "react";
import SectionDivider from "../../componentss/SectionDivider/SectionDivider";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";

const Landing = () => {
  return (
    <div id="home" className="min-w-screen p-5">
      <Home />
      <SectionDivider margin={"lg:-mt-64"} />
      <Services />
      <SectionDivider margin={"mt-20"} />
      <Portfolio />
      <SectionDivider margin={"mt-20"} />
      <Resume />
      <SectionDivider margin={"mt-20"} />
      <Contact />
    </div>
  );
};

export default Landing;
