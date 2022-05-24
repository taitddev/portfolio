import React from "react";
import { Link } from "react-router-dom";

import "./HeroImg2.css";

const HeroImg2 = ({ heading, text }) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1 className="content-title">{heading}</h1>
        <p className="content-text">{text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
