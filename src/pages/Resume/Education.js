import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "BSc. in Computer Science And Engineering",
      institute: "Hajee Mogammad Danesh Science And Technology University",
      year: "2022 (First Semester) - 2026 (Possibly)",
    },
    {
      id: 2,
      degree: "Science",
      institute: "Notre Dame Collage",
      year: "2018 - 2020",
    },
  ];
  return (
    <div>
      <div class="relative max-w-2xl mx-auto mt-16">
        <div class="absolute top-0 h-full border-r-2 border-black left-3"></div>
        <ul class="space-y-2">
          {educations.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
