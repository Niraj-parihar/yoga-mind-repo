/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import leftImage from "../assets/Screenshot 2024-01-29 215052.png";
import { IoMdTime } from "react-icons/io";
import { FcComments } from "react-icons/fc";
import styled from "styled-components";

const Container = styled.div`
  .container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid none;
    border-radius: 5px;
    overflow: hidden;
    background: rgb(251, 251, 241);
  }
  .left {
    padding: 5rem;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
  .left > h2 {
    font-family: cursive;
    color: #22637f;
    margin: 5px;
    margin-top: 2rem;
  }
  .left-image {
    margin: 5px;
    height: 80%;
    width: 100%;
  }
  .left > h3 {
    margin-top: -2rem;
    font-family: cursive;
    color: #22637f;
  }
  .left > p {
    margin: 5px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  .right {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: self-start;
  }
  .right > h2 {
    font-family: cursive;
    color: #22637f;
  }
  .subscription-details {
    /* background-color: red; */
    height: 40%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: self-start;
  }
  .package {
    height: 25%;
    width: 60%;
    margin: 0.5rem;
    background-color: whitesmoke;
    display: flex;
    border: 1px solid none;
    border-radius: 2rem;
    display: flex;
  }
  .package-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
  }
  .package-left > p > s {
    color: #a29584;
  }
  .package-left > p > b {
    color: green;
  }
  .package-right {
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .package-right > span {
    color: #a29584;
  }
  button {
    height: 2rem;
    width: 6rem;
    border: 1px solid whitesmoke;
    border-radius: 1rem;
    background-color: #fd776e;
    color: white;
    cursor: pointer;
  }
  .course-benefit > h3 {
    font-family: cursive;
    color: #22637f;
  }
  #icon {
    margin-top: 10px;
    display: inline-block;
  }
  #p1 {
    display: inline;
    margin-left: 5px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <div class="container">
        <div className="left">
          <h2 class="yoga-heading">Yoga for Mind</h2>
          <div class="left-image">
            <img src={leftImage} alt="left Image" className="left-image" />
          </div>
          <h3>What is Yoga for Mind</h3>
          <p>
            The Yoga for Mind involves physical movement and relies on technique
            such as pranayama and meditation, Suited for women who cannot
            perfrom more physical forms of yoga and are looking for relief from
            concerns such as stress, anxiety, low mood etc
          </p>
        </div>

        <div className="right">
          <h2>Choose your package</h2>
          <div className="subscription-details">
            <div className="package">
              <div className="package-left">
                <h5>6 Months</h5>
                <p>
                  <s>₹12999</s> <b>₹5499</b>
                </p>
              </div>
              <div className="package-right">
                <span>916/month</span>
                <button>BUY NOW</button>
              </div>
            </div>
            <div className="package">
              <div className="package-left">
                <h5>3 Months</h5>
                <p>
                  <s>₹5999</s> <b>₹2999</b>
                </p>
              </div>
              <div className="package-right">
                <span>999/month</span>
                <button>BUY NOW</button>
              </div>
            </div>
            <div className="package">
              <div className="package-left">
                <h5>1 Months</h5>
                <p>
                  <s>₹1999</s>
                  <b> ₹1199</b>
                </p>
              </div>
              <div className="package-right">
                <span>1199/month</span>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="course-benefit">
            <h3>What you'll get</h3>

            <FcComments id="icon" />
            <p id="p1">
              A chat group on thne Elda app wahere you can connect with your
              traniner and the rest of the elda Yoga Community.
            </p>
            <br></br>
            <IoMdTime id="icon" />
            <p id="p1">
              Ability to reschudule your class if you miss your session.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ProductPage;
