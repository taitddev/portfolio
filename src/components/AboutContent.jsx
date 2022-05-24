import React from "react";
import { Link } from "react-router-dom";

import react1 from "../assets/images/react1.jpg";
import react2 from "../assets/images/react2.webp";

import "./AboutContent.css";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who I'm I?</h1>
        <p>
          I'm a react front-end developer. I create responsive secure websites
          for my clients
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-stack top">
            <img src={react1} alt="image" className="img" />
          </div>

          <div className="image-stack bottom">
            <img src={react2} alt="image" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
