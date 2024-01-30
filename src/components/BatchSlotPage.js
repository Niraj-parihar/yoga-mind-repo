// components/BatchSlotPage.js
import React from "react";
import "./BatchSlotPage.css";
import image from "../assets/Screenshot 2024-01-29 215052.png";

const BatchSlotPage = () => {
  return (
    <div>
      <div className="front-image" style={{width:"500px", height:"250px", backgroundColor:"gray"}}>
        <img src={image} alt="frontImage" />
      </div>
    </div>
  );
};

export default BatchSlotPage;
