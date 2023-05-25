import React, { useState, useEffect, useRef } from "react";

// import Header from "../components/header/Header";
// import Navbar from "../components/header/Navbar";

import styles from "./Landing.module.scss";

const Landing = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name Input is valid!");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (enteredName.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    } else {
      setEnteredNameIsValid(true);
    }

    console.log(enteredName);

    setEnteredName("");
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };

  return (
    <div id={styles["landing"]}>
      <form onSubmit={formSubmissionHandler}>
        <div
          className={
            nameInputIsInvalid
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
            id='name'
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {nameInputIsInvalid ? (
            <p className={styles["error-text"]}>Field must not be empty!</p>
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
