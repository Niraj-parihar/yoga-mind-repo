import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styled from "styled-components";

const Container = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(251, 251, 241);
  }
  h1 {
    width: 100%;
    height: 5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #22637f;
  }
  .form {
    height: auto;
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
  #checkbox {
    margin-right: 1rem;
  }

  #link {
    text-decoration: none;
    color: rgb(215, 86, 108);
  }

  button {
    position: relative;
    width: 20%;
    left: 40%;
    padding: 10px;
    margin-top: 1rem;
    cursor: pointer;
    background-color: rgb(215, 86, 108);
    color: #fff;
    border: none;
    border-radius: 4px;
  }

  button:disabled {
    background-color: #fd776e;
    color: white;
    cursor: pointer;
  }
`;

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
    <Container>
      <div className="container">
        <h1>Login to your account</h1>
        <div className="form">
          <form>
            <PhoneInput
              className="phoneInput"
              country={"in"}
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
              }}
            />
            {!valid && <p>Please enter a valid phone number.</p>}
            <br />
            <span>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={handleAgreeTermsChange}
                  required
                />
                I agree with the{" "}
                <Link
                  id="link"
                  to="https://github.com/Niraj-parihar/yoga-mind-repo"
                  onClick={() => {
                    alert("Redirecting to github");
                  }}
                >
                  Terms & Condtions & Privacy policy
                </Link>{" "}
                of Elda Health
              </label>
            </span>
            <div>
              <button
                type="button"
                onClick={handleSendOTP}
                disabled={!phoneNumber || !agreeTerms}
              >
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
