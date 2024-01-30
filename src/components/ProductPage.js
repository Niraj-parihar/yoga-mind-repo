/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./ProductPage.css";
import leftImage from "../assets/Screenshot 2024-01-29 215052.png";
import { IoMdTime } from "react-icons/io";
import { FcComments } from "react-icons/fc";

const ProductPage = () => {
  return (
    <div>
      <div class="container">
        <div>
          <h1 class="yoga-heading">Yoga for Mind</h1>
        </div>

        <div class="left-image">
          <img src={leftImage} alt="left Image" className="left-image" />
        </div>

        <div class="yoga-description">
          <div>
            <h1>What is Yoga for Mind</h1>
          </div>
          <div>
            <h3>
              The Yoga for Minf involves physical movement and relies on
              technique such as pranayama and meditation, Suited for women who
              cannot perfrom more physical forms of yoga and are looking for
              relief from concerns such as stress, anxiety, low mood etc.
            </h3>
          </div>
        </div>

        <div class="package-description">
          <div class="package-heading">
            <h1>Choose your package</h1>
          </div>
          <div class="subscription-details">
            <div class="price-row">
              <h2>6 Months</h2>
              <h4>916 / month</h4>

              <button>BUY Now</button>
            </div>
            <div class="price-row">
              <h2>3 Months</h2>
              <h4>999 / month</h4>

              <button>BUY Now</button>
            </div>
            <div class="price-row">
              <h2>1 Months</h2>
              <h4>1199 / month</h4>
              <button>BUY Now</button>
            </div>
          </div>
        </div>
        <div className="course-benefit">
          <div className="header">
            <h1>What you'll get</h1>
          </div>
          <div>
            <FcComments />
            {
              " A chat group on thne Elda app wahere you can connect with your traniner and the rest of the elda Yoga Community."
            }
            <IoMdTime />
            {" Ability to reschudule your class if you miss your session "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
