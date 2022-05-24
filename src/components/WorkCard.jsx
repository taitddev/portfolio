import React from "react";
import { NavLink } from "react-router-dom";

import "./WorkCard.css";

const WorkCard = ({ imgSrc, title, text, viewUrl, sourceUrl }) => {
  return (
    <div className="project-card">
      <img src={imgSrc} alt="project image" className="card-image" />

      <div className="card-content">
        <h2 className="project-title">{title}</h2>

        <p>{text}</p>
        <div className="btn-group">
          <NavLink to={viewUrl} className="btn">
            View
          </NavLink>

          <NavLink to={sourceUrl} className="btn btn-light">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
