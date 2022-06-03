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
      <div class="relative max-w-2xl mx-auto mt-16">
        <div class="absolute top-0 h-full border-r-2 border-black left-3"></div>
        <ul class="space-y-2">
          <EducationCard education={trainee} />
        </ul>
      </div>
    </div>
  );
};

export default Trainee;
