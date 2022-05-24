import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
          <p className="price"> $ 100</p>
          <p className="time-spent"> 3 Days</p>
          <p className="pages"> 3 Pages</p>
          <p className="featured"> Featured</p>
          <p className="response">Response Design</p>
          <Link to="contact">
            <button className="btn">Purchase now</button>
          </Link>
        </div>

        <div className="card">
          <h3>Premium</h3>
          <span className="bar"></span>
          <p className="price"> $ 200</p>
          <p className="time-spent"> 2 Days</p>
          <p className="pages"> 5 Pages</p>
          <p className="featured"> Featured</p>
          <p className="response">Response Design</p>
          <Link to="contact">
            <button className="btn">Purchase now</button>
          </Link>
        </div>

        <div className="card">
          <h3>Business</h3>
          <span className="bar"></span>
          <p className="price"> $ 300</p>
          <p className="time-spent"> 5 Days</p>
          <p className="pages"> 8 Pages</p>
          <p className="featured"> Featured</p>
          <p className="response">Response Design</p>
          <Link to="contact">
            <button className="btn">Purchase now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
