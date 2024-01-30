import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LoginPage = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSendOTP = () => {
    //logic to send OTP based on the phone number
    console.log("Sending OTP to:", phoneNumber);
  };

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div>
      <div className="container">
        <h1>Login to your account</h1>
        <form>
          <label>
            <PhoneInput
              country={"in"}
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
              }}
            />
          </label>
          {!valid && <p>Please enter a valid phone number.</p>}
          <br />
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
              required
            />
            I agree with the{" "}
            <Link
              to="https://github.com/Niraj-parihar/yoga-mind-repo"
              onClick={() => {
                alert("Redirecting to github");
              }}
            >
              Terms & Condtions & Privacy policy
            </Link>{" "}
            of Elda Health
          </label>
          <br />
          <button
            type="button"
            onClick={handleSendOTP}
            disabled={!phoneNumber || !agreeTerms}
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
