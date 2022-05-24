import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div className="footer-container">
        <div className="content-container">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff" }} />
            <div>
              <p>58 Nguyen Khanh Toan</p>
              <p>Cau Giay - Ha Noi</p>
            </div>
          </div>

          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff" }} />
            <p>+822532276 / +84965913148</p>
          </div>

          <div className="email">
            <FaMailBulk size={20} style={{ color: "#fff" }} />
            <p>taitd.dev@gmail.com</p>
          </div>
        </div>

        <div className="content-container">
          <h4 className="about-title">About the company</h4>
          <p>
            This is me - Trinh Dinh Tai. I enjoy discussing new projects and
            design challenges
          </p>
          <div className="social-list">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />

            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />

            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
