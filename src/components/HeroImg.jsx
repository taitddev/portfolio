import React from "react";
import { Link } from "react-router-dom";

import "./HeroImg.css";
import IntroImg from "../assets/images/intro-bg.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="Intro background" className="intro-img" />
      </div>

      <div className="content">
        <p className="content-title">Hi, i'm a freelancer.</p>
        <h1 className="content-text">React Developer.</h1>

        <div className="btn-group">
          <Link to="/project" className="btn">
            Projects
          </Link>

          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
