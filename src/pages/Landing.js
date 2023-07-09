import React, { useState, useEffect } from "react";

import { db } from "../firebase_setup/firebase-config";
import { collection, addDoc } from "firebase/firestore";

import styles from "./Landing.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faCheck } from "@fortawesome/free-solid-svg-icons";

import landingImagePictureDesktop from "../assets/images/landing_image_desktop.svg";
import iconImage from "../assets/images/icon.png";

import LandingFooter from "../components/Landing/LandingFooter";

const Landing = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [showNormal, setShowNormal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (enteredEmailIsValid) {
      console.log("Email Input is valid!");
    }
  }, [enteredEmailIsValid]);

  const EmailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setEnteredEmailIsValid(true);

    if (enteredEmail.trim() !== "" && enteredEmail.indexOf("@") > -1) {
      setEnteredEmailIsValid(true);
    }
  };

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setShowNormal(false);

    setEnteredEmailTouched(true);
    const enteredEmailTrimmed = enteredEmail.trim();
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (enteredEmailTrimmed === "" || !enteredEmailTrimmed.match(pattern)) {
      setEnteredEmailIsValid(false);

      setIsLoading(false);
      setShowNormal(true);
    } else {
      setEnteredEmailIsValid(true);

      const postsCollectionRef = collection(db, "Emails");
      try {
        await addDoc(postsCollectionRef, { email: enteredEmail });

        setIsLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);

          setShowNormal(true);
        }, 1500);
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
      <div className={styles["landing-page"]}>
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
            Are you a high school student looking for internships?<strong> Look no further!</strong>
            <br /> <br />
            We actively collaborate with diverse companies and organizations to deliver the
            practical, hands-on experience you need!
            <br />
            <br />
            <b>Sign up now to get notified once we go live!</b>
          </h2>
          <form
            autoComplete='on'
            onSubmit={formSubmissionHandler}
          >
            <div
              classEmail={
                emailInputIsInvalid
                  ? styles["form-control"] + " " + styles["invalid"]
                  : styles["form-control"]
              }
              className={styles["input-container"]}
            >
              <input
                className={styles["form-input"]}
                type='text'
                placeholder='team@internio.app'
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
              {showNormal && (
                <button className={styles["button-submit"]}>
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    size='2x'
                    className={styles["button-submit-icon"]}
                  />
                </button>
              )}
              {success && (
                <button className={styles["button-submit"]}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    size='2x'
                    className={styles["button-submit-icon"]}
                  />
                </button>
              )}

              {isLoading && (
                <button className={styles["button-submit"]}>
                  <div className={styles["spin"]}></div>
                </button>
              )}
            </div>
          </form>

          <button className={styles["btn"]}>
            <a href='https://internio.notion.site/internio/Job-Board-f02cf790ddc944f1ab233c22cf44157e'>
              we're hiring!
            </a>
          </button>
        </div>
        <div className={styles["landing-right"]}>
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
      </div>
      <LandingFooter />
    </div>
  );
};

export default Landing;
