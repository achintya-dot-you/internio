import React, { useState, useEffect } from "react";

import axios from "axios";
import { storage } from "../../firebase_setup/firebase-config";
import { ref, uploadBytes } from "firebase/storage";

import styles from "./OpportunitiesForm.module.scss";
import { v4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash, faX } from "@fortawesome/free-solid-svg-icons";

const apiKey = "https://sheet.best/api/sheets/" + process.env.REACT_APP_Sheets_apiKey;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]{8,14}$/g;

const OpportunitiesForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [institution, setInstitution] = useState("");
  const [city, setCity] = useState("");
  const [reason, setReason] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState();
  const [remarks, setRemarks] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");

    let isDataValid = true;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      !emailIsValid ||
      phone.trim() === "" ||
      !phoneIsValid ||
      institution.trim() === "" ||
      city.trim() === "" ||
      reason.trim() === "" ||
      experience.trim() === ""
    ) {
      isDataValid = false;
      console.log({
        Name: name.trim(),
        Email: email.trim(),
        PhoneNumber: "no: " + phone.trim(),
        Institution: institution.trim(),
        CityOfResidence: city.trim(),
        phone: !phonePattern.test(phone.trim()),
        email: !emailPattern.test(email.trim()),
        Reason: reason.trim(),
        PreviousExperience: experience.trim(),
        AdditionalRemarks: remarks === "" ? "-" : remarks.trim(),
        Position: props.position,
        Company: props.company,
      });
      console.log("Data is invalid. Setting isWrong to true.");
    }

    if (isDataValid) {
      console.log("Data is valid. Setting isSubmitted to true and isWrong to false.");
      setIsWrong(false);

      let resumeFileName = "-";
      if (resume) {
        resumeFileName = email + "_" + v4();
        const resumeRef = ref(storage, `resumes/${resumeFileName}`);
        await uploadBytes(resumeRef, resume);
      }

      const data = {
        Name: name.trim(),
        Email: email.trim(),
        ResumeFileName: resumeFileName.trim(),
        PhoneNumber: "no: " + phone.trim(),
        Institution: institution.trim(),
        CityOfResidence: city.trim(),
        Reason: reason.trim(),
        PreviousExperience: experience.trim(),
        AdditionalRemarks: remarks === "" ? "-" : remarks.trim(),
        Position: props.position,
        Company: props.company,
      };

      try {
        await axios.post(apiKey, data);
        console.log("Data submitted successfully.");
        setName("");
        setEmail("");
        setResume(null);
        setPhone("");
        setInstitution("");
        setCity("");
        setReason("");
        setExperience("");
        setRemarks("");
        setIsSubmitted(true);
        setIsWrong(false);
      } catch (error) {
        console.error("Error submitting data:", error);
        // Handle error if needed
      }
    } else {
      setIsWrong(true);
      console.log("Data is invalid. Setting isWrong to true.");
    }
  };

  useEffect(() => {
    const isEmailValid = emailPattern.test(email.trim());
    const isPhoneValid = phonePattern.test(phone.trim());

    setEmailIsValid(isEmailValid);
    setPhoneIsValid(isPhoneValid);
  }, [email, phone]);

  const outsidePopupClickHandler = () => {
    setTimeout(() => {
      setIsWrong(false);
      setIsSubmitted(false);
    }, 1000);
  };

  const insidePopupClickHandler = (e) => {
    e.stopPropagation();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <>
      <h2 className={styles["heading"]}>Fill out the details to apply</h2>
      <form
        autoComplete='off'
        className={styles["form"]}
        onKeyDown={handleKeyPress}
      >
        <div className={styles["field"] + " " + styles["required"]}>
          <label>Name</label>
          <input
            autoComplete='off'
            type='text'
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className={styles["field"] + " " + styles["required"]}>
          <label>Phone Number</label>
          <input
            autoComplete='off'
            type='tel'
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          />
        </div>
        <div className={styles["field"] + " " + styles["required"]}>
          <label>Email</label>
          <input
            autoComplete='off'
            type='text'
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className={styles["field"] + " " + styles["required"]}>
          <label>What institution do you attend?</label>
          <input
            autoComplete='off'
            type='text'
            required
            onChange={(e) => {
              setInstitution(e.target.value);
            }}
            value={institution}
          />
        </div>
        <div className={styles["field"] + " " + styles["required"]}>
          <label>City of Residence</label>
          <input
            autoComplete='off'
            type='text'
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
          />
        </div>
        <div className={styles["field"] + " " + styles["required"]}>
          <label>Why do you want to join {props.company}?</label>
          <textarea
            autoComplete='off'
            required
            rows='4'
            onChange={(e) => {
              setReason(e.target.value);
            }}
            value={reason}
          />
        </div>
        <div className={styles["field"] + " " + styles["required"]}>
          <label>List any previous experience you have with the related field.</label>
          <textarea
            autoComplete='off'
            required
            rows='4'
            onChange={(e) => {
              setExperience(e.target.value);
            }}
            value={experience}
          />
        </div>
        <div className={styles["field"]}>
          <label>Resume</label>
          <div className={styles["file-upload-actions"]}>
            <label
              for='resume-upload'
              className={styles["file-upload-label"]}
            >
              <input
                autoComplete='off'
                type='file'
                id='resume-upload'
                onChange={(e) => {
                  setResume(e.target.files[0]);
                }}
              />
              <div className={styles["file-upload-content"]}>
                Upload Resume
                <FontAwesomeIcon
                  icon={faUpload}
                  className={styles["file-upload-icon"]}
                />
              </div>
            </label>
            <label
              for='resume-clear'
              className={styles["file-upload-label"]}
            >
              <div
                className={styles["file-upload-content"]}
                onClick={() => {
                  setResume();
                }}
              >
                Clear
                <FontAwesomeIcon
                  icon={faTrash}
                  className={styles["file-upload-delete"]}
                />
              </div>
            </label>
          </div>
          {resume !== null && resume !== undefined && (
            <span className={styles["resume-display"]}>{resume.name}</span>
          )}
        </div>
        <div className={styles["field"]}>
          <label>Additional Remarks</label>
          <textarea
            autoComplete='off'
            rows='3'
            onChange={(e) => {
              setRemarks(e.target.value);
            }}
            value={remarks}
          />
        </div>
        <button
          type='submit'
          className={styles["button"]}
          onClick={handleSubmit}
        >
          Apply Now
        </button>
      </form>
      {isSubmitted && (
        <>
          <div
            className={styles["popup-container"]}
            onClick={outsidePopupClickHandler}
          >
            <div
              className={styles["popup"]}
              onClick={insidePopupClickHandler}
            >
              <FontAwesomeIcon
                icon={faX}
                className={styles["popup-icon"]}
                onClick={() => {
                  setIsSubmitted(false);
                }}
              />
              <h5>Submission Received!</h5>
              <p>
                You can expect to receive additional details regarding your internship application
                in the coming days.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                }}
              >
                Hide
              </button>
            </div>
          </div>
        </>
      )}
      {isWrong && (
        <div
          className={styles["popup-container"]}
          onClick={outsidePopupClickHandler}
        >
          <div
            className={styles["popup"]}
            onClick={insidePopupClickHandler}
          >
            <FontAwesomeIcon
              icon={faX}
              className={styles["popup-icon"]}
              onClick={() => {
                setIsWrong(false);
              }}
            />
            <h5>Invalid Data Entered!</h5>
            <p>
              Please make sure to fill in the required sections of the form with correct details.
            </p>
            <button
              onClick={() => {
                setIsWrong(false);
              }}
            >
              Hide
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OpportunitiesForm;
