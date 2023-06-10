import React, { useState, useEffect } from "react";

import { db } from "../firebase_setup/firebase-config";
import { collection, addDoc } from "firebase/firestore";

import styles from "./Landing.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

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

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);
    const enteredEmailTrimmed = enteredEmail.trim();
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (enteredEmailTrimmed === "" || !enteredEmailTrimmed.match(pattern)) {
      setEnteredEmailIsValid(false);
    } else {
      setEnteredEmailIsValid(true);

      const postsCollectionRef = collection(db, "Emails");
      try {
        await addDoc(postsCollectionRef, { email: enteredEmail });
      } catch (e) {
        console.log(e);
      }

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
          <button className={styles["button-submit"]}>
            <FontAwesomeIcon
              icon={faRightToBracket}
              size='2x'
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Landing;
