import React, { useState, useEffect, useRef } from "react";

// import Header from "../components/header/Header";
// import Navbar from "../components/header/Navbar";

import styles from "./Landing.module.scss";

const Landing = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  useEffect(() => {
    if (enteredEmailIsValid) {
      console.log("Email Input is valid!");
    }
  }, [enteredEmailIsValid]);

  const EmailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    if (enteredEmail.trim() !== "" && enteredEmail.indexOf("@") > -1) {
      setEnteredEmailIsValid(true);
    }
  };

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);

    if (enteredEmail.trim() === "" || !(enteredEmail.indexOf("@") > -1)) {
      setEnteredEmailIsValid(false);
    } else {
      setEnteredEmailIsValid(true);

      setEnteredEmail("");
    }

    console.log("Entered Email: " + enteredEmail);
  };

  const EmailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);

    if (enteredEmail.trim() === "" || !(enteredEmail.indexOf("@") > -1)) {
      setEnteredEmailIsValid(false);
      return;
    }
  };

  return (
    <div id={styles["landing"]}>
      <form
        autocomplete='off'
        onSubmit={formSubmissionHandler}
      >
        <div
          classEmail={
            emailInputIsInvalid
              ? styles["form-control"] + " " + styles["invalid"]
              : styles["form-control"]
          }
        >
          {/* <label
            htmlFor='name'
            className={styles["form-label"]}
          >
            Enter Your Email
          </label> */}
          <input
            placeholder='Enter Your Email'
            className={styles["form-input"]}
            type='text'
            id='Email'
            onChange={EmailInputChangeHandler}
            onBlur={EmailInputBlurHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid ? (
            <p className={styles["error-text"]}>Invalid Email Entered</p>
          ) : (
            <p className={styles["hidden"] + " " + styles["error-text"]}>asdfasdf</p>
          )}
        </div>
        <div className={styles["form-actions"]}>
          <button className={styles["button-submit"]}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Landing;
