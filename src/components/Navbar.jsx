import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  const handleClick = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={bgColor ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="logo">
          TaiTD<span>.dev</span>
        </h1>
      </Link>

      <ul className={isOpenNavbar ? "navbar-list active" : "navbar-list"}>
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/project" className="navbar-link">
            Project
          </Link>
        </li>

        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>

        <li>
          <Link to="/Contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>

      <div className="navbar-toggle-btn" onClick={handleClick}>
        {isOpenNavbar ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
