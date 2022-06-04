import React from "react";
import EducationCard from "./EducationCard";

const Trainee = () => {
  const trainee = {
    degree: "Complete Development Course",
    institute: "Programming Hero",
    year: "January 2022 - May 2022",
  };
  return (
    <div>
      <div className="relative max-w-2xl mx-auto  p-5 lg:p-10  mt-16">
        <div className="absolute top-0 h-full border-r-2 border-black left-3"></div>
        <ul className="space-y-2">
          <EducationCard education={trainee} />
        </ul>
      </div>
    </div>
  );
};

export default Trainee;
