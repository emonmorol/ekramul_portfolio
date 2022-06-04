import React from "react";
import SectionDivider from "../../componentss/SectionDivider/SectionDivider";

const EducationCard = ({ education }) => {
  const { degree, institute, year } = education;
  return (
    <li>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1500"
        class="timeline-card flex items-center mb-10"
      >
        <div className="education-card ml-10 text-left text-accent">
          <p className="text-xl text-white font-semibold">{degree}</p>
          <SectionDivider margin={"mb-3 my-3"} />
          <p>{institute}</p>
          <p>{year}</p>
        </div>
      </div>
    </li>
  );
};

export default EducationCard;
