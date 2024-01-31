import { useState } from "react";
import React from "react";
import image from "../assets/Screenshot 2024-01-29 215052.png";
import Slot from "./Slot";
import { MdAccessTime } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
  body {
    overflow-x: hidden;
    padding: 1rem;
  }
  .header > h2 {
    font-family: cursive;
    color: #22637f;
  }

  .header > img {
    width: 100vw;
    height: 35vh;
    object-fit: cover;
  }

  .header > * {
    margin: 1rem;
  }
  .header > h3 {
    font-family: cursive;
    color: #22637f;
  }
  .header > p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .package > * {
    margin: 1rem;
  }
  .package > h3 {
    color: #22637f;
    font-family: cursive;
  }
  .package > p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  .package > p > b {
    color: palevioletred;
  }
  .package > h4 {
    color: #22637f;
  }
  .slots {
    display: inline-block;
    background-color: white;
    border-radius: 10px;
    height: 5rem;
    width: 5rem;
  }
  button {
    height: 2rem;
    width: 6rem;
    cursor: pointer;
    background-color: rgb(215, 86, 108);
    color: #fff;
    border: 1px solid whitesmoke;
    border-radius: 1rem;
  }
  .yoga-time-slot {
    background: white;
    border: 1px solid black;
    border-radius: 10px;
  }
  .yoga-time-slot > input {
    padding-left: 10px;
  }
  .buy-btn {
    margin-top: 10px;
  }
`;

const BatchSlotPage = () => {
  const [selected, setSelected] = useState();
  const data = [
    { date: "29th Jan", day: "Monday" },
    { date: "30th Jan", day: "Tuesday" },
    { date: "31th Jan", day: "Wednesday" },
    { date: "1st Feb", day: "Thursday" },
    { date: "2nd Feb", day: "Friday" },
    { date: "5rd Feb", day: "Monday" },
    { date: "6th Feb", day: "Tuesday" },
    { date: "7th Feb", day: "Wednesday" },
    { date: "8th Feb", day: "Thursday" },
    { date: "9th Feb", day: "Friday" },
    { date: "12th Feb", day: "Monday" },
    { date: "13th Feb", day: "Tuesday" },
    { date: "14th Feb", day: "Wednesday" },
    { date: "15th Feb", day: "Thursday" },
  ];
  return (
    <Container style={{ background: "rgb(251, 251, 241)" }}>
      <div className="header">
        <h2>Yoga for Mind</h2>
        <img src={image} alt="frontImage" />
        <h3>What is Yoga for Mind?</h3>
        <p>
          The Yoga for Mind involves physical movement and relies on technique
          such as pranayama and meditation, Suited for women who cannot perfrom
          more physical forms of yoga and are looking for relief from concerns
          such as stress, anxiety, low mood etc
        </p>
      </div>
      <div className="package">
        <h3>1 Month Yoga for Mind</h3>
        <p>
          5 days a week <b>Change Plan</b>
        </p>
        <h4>Pick a start date</h4>
        <p>Dates are available only for next two weeks</p>
        {data.map((date, index) => (
          <div className="slots" onClick={() => setSelected(index)}>
            <Slot
              id="slot"
              date={date.date}
              day={date.day}
              isActive={index === selected}
            />
          </div>
        ))}
      </div>
      <div className="slot-container">
        <div className="time-slot-heading">
          <h2 style={{ color: "#559EB0" }}>Select Time slot</h2>
        </div>

        <div className="yoga-time-slot">
          <div className="checkbox">
            <input type="checkbox" name="time-picker" />
          </div>
          <MdAccessTime /> {"05:00PM - 05:40PM"}
          <p style={{ fontSize: "10px" }}>MON, TUE, WED,THU, FRI</p>
          <div className="checkbox">
            <input type="checkbox" name="time-picker" />
          </div>
          <MdAccessTime /> {"08:00PM - 08:40PM"}
          <p style={{ fontSize: "10px" }}>MON, TUE, WED,THU, FRI</p>
        </div>

        <div className="buy-btn">
          <button>Buy package</button>
        </div>
      </div>
    </Container>
  );
};

export default BatchSlotPage;
