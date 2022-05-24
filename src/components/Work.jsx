import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import "./Work.css";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">My Projects</h1>

      <div className="project-container">
        {WorkCardData.map((data, index) => (
          <WorkCard
            key={index}
            imgSrc={data.imgSrc}
            title={data.title}
            text={data.text}
            viewUrl={data.viewUrl}
            sourceUrl={data.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
