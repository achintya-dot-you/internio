import React, { useState, useEffect } from "react";

import { db } from "../firebase_setup/firebase-config";
import { collection, addDoc } from "firebase/firestore";

import styles from "./Landing.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import landingBackgroundPictureDesktop from "../assets/images/landing-background/landing_background_desktop.png";

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
      <div className={styles["landing-background"]}>
        <picture className={styles["landing_background_picture"]}>
          <img
            srcSet={landingBackgroundPictureDesktop}
            alt=''
            className={styles["landing_background_picture_desktop"]}
          />
        </picture>
      </div>
      <div className={styles["landing-content"]}>
        <h1 className={styles["heading"]}>
          <span className={styles["heading-top"]}>internio</span>
          <span className={styles["heading-bottom"]}>empowering future leaders!</span>
        </h1>
        <h2 className={styles["sub-header"]}>
          We're passionate about empowering high school students through internship opportunities.
        </h2>
        <form
          autoComplete='off'
          onSubmit={formSubmissionHandler}
        >
          <div
            classEmail={
              emailInputIsInvalid
                ? styles["form-control"] + " " + styles["invalid"]
                : styles["form-control"]
            }
          >
            <input
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
    </div>
  );
};

export default Landing;
