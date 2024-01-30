import React from "react";
import "./BatchSlotPage.css";
import "react-day-picker/dist/style.css";
import image from "../assets/Screenshot 2024-01-29 215052.png";
import { MdAccessTime } from "react-icons/md";

const BatchSlotPage = () => {
  return (
    <div>
      <div className="heading">
        <h1 style={{ color: "#445F89" }}> Yoga for Mind</h1>
      </div>

      {/* div for image */}
      <br />
      <div className="front-image">
        <img src={image} alt="frontImage" />
      </div>
      <br />

      {/* div for yoga description */}
      <div className="yoga-desc">
        <h1 style={{ color: "#445F89" }}>1 Month Yoga for Mind</h1>
        <p style={{ color: "#ABB0B9" }}>
          The Yoga for Mind involves physical movement and relies on technique
          such as pranayama and meditation, Suited for women who cannot perfrom
          more physical forms of yoga and are looking for relief from concerns
          such as stress, anxiety, low mood etc.
        </p>
      </div>

      {/* div for yoga-package */}
      <div className="yoga-stat" style={{ color: "#ABB0B9" }}>
        <p>Yoga &#183; Yoga for Mind &#183; Package</p>
      </div>

      {/* div for yoga plan */}
      <div className="yoga-package-stat">
        <div className="">
          <h1 style={{ color: "#445F89" }}>1 Month Yoga for Mind</h1>
          <p style={{ color: "lightgray" }}>5 days a week Change Plan</p>
        </div>
      </div>

      {/* div for calendar */}
      <div>
        <div className="date-picker">
          <h2 style={{ color: "#559EB0" }}>Pick a start date</h2>
          <p style={{ color: "lightgray" }}>
            Dates are available only for next 2 weeks
          </p>
        </div>
        <div></div>
      </div>

      {/* time slot picker*/}
      <div className="slot-container">
        <div className="time-slot-heading">
          <h2 style={{ color: "#559EB0" }}>Select Time slot</h2>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="time-picker" />
        </div>

        <div className="yoga-time-slot">
          <MdAccessTime /> {"05:00PM - 05:40PM"}
          <p style={{ fontSize: "10px" }}>MON, TUE, WED,THU, FRI</p>
        </div>
        <div className="yoga-time-slot">
          <MdAccessTime /> {"08:00PM - 08:40PM"}
          <p style={{ fontSize: "10px" }}>MON, TUE, WED,THU, FRI</p>
        </div>
        <div className="buy-btn">
          <button>Buy package</button>
        </div>
      </div>
    </div>
  );
};

export default BatchSlotPage;
