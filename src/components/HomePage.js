/* eslint-disable jsx-a11y/img-redundant-alt */
// components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import rightCornerImage from "../assets/Screenshot 2024-01-29 195159.png";

const HomePage = () => {
  return (
    <div>
      <div class="container">
        <h1>Yoga for Mind</h1>
        <div class="line-2">
          <h3>
            Watch Our Lead Yoga Thrapist. <u>Ms Uma Subramaniam </u>explain
            <br />
            Yoga for Mind
          </h3>
        </div>

        <img
          src={rightCornerImage}
          alt="Right Corner Image"
          className="right-corner-image"
        />
        <div class="line-3">
          <h3>is this for you?</h3>
        </div>

        <div>
          <h3>Hard to feel calm or sleep because of stress</h3>
          <button>Book trial @99</button>
        </div>
        <div>
          <h3>Hard to feel calm or sleep because of stress</h3>
          <button>Book trial @99</button>
        </div>
        <div>
          <h3>You have been advised by doctors to avoid physical activity</h3>
          <Link
            to="https://github.com/Niraj-parihar/yoga-mind-repo"
            onClick={() => {
              alert("Redirecting to github");
            }}
          >
            i have a question
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
