import React, { useState, useEffect } from "react";

import { db } from "../firebase_setup/firebase-config";
import { collection, addDoc } from "firebase/firestore";

import styles from "./Landing.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import landingImagePictureDesktop from "../assets/images/landing-image/landing_image_desktop.svg";
import iconImage from "../assets/images/icon.png";

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
      <div className={styles["landing-content"]}>
        <h1 className={styles["heading"]}>
          <span className={styles["heading-top"]}>
            interni
            <img
              srcSet={iconImage}
              alt=''
            ></img>
          </span>
          <span className={styles["heading-bottom"]}>empowering future leaders!</span>
        </h1>
        <h2 className={styles["sub-header"]}>
          Are you a high school student looking for internships? <br />
          Look no further!



          <br /> <br />
          We work with various companies to provide you with the practical and hands-on experience that you need!
  
          <br /><br /><b>Sign up now to get notified once we go live!</b>
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
              <p className={styles["error-text"]}>Invalid email entered!</p>
            ) : (
              <p className={styles["hidden"] + " " + styles["error-text"]}>asdfasdf</p>
            )}
          </div>
          <div className={styles["form-actions"]}>
            <button className={styles["button-submit"]}>
              <FontAwesomeIcon
                icon={faRightToBracket}
                size='2x'
                className={styles["button-submit-icon"]}
              />
            </button>
          </div>
        </form>
      </div>
      <div className={styles["landing-image"]}>
        <picture className={styles["landing_image_picture"]}>
          <img
            srcSet={landingImagePictureDesktop}
            alt=''
            className={styles["landing_image_picture_desktop"]}
          />
        </picture>
      </div>
    </div>
  );
};

export default Landing;
