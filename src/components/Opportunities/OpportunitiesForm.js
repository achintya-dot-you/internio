import React, { useState } from "react";

import axios from "axios";
import { storage } from "../../firebase_setup/firebase-config";
import { ref, uploadBytes } from "firebase/storage";

import styles from "./OpportunitiesForm.module.scss";
import { v4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash } from "@fortawesome/free-solid-svg-icons";

const OpportunitiesForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [city, setCity] = useState("");
  const [reason, setReason] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState();
  const [remarks, setRemarks] = useState("");
  const [wrong, setWrong] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      institution === "" ||
      city === "" ||
      reason === "" ||
      experience === ""
    ) {
      setWrong(true);
      return;
    }
    if (resume === null) {
      const data = {
        Name: name,
        Email: email,
        ResumeFileName: "-",
        PhoneNumber: phone,
        Institution: institution,
        CityOfResidence: city,
        Reason: reason,
        PreviousExperience: experience,
        AdditionalRemarks: remarks === "" ? "-" : remarks,
      };
      setName("");
      setEmail("");
      setResume();
      setPhone("");
      setInstitution("");
      setCity("");
      setReason("");
      setExperience("");
      setRemarks("");
      axios.post(process.env.APPLICATIONS_apiKey, data).then((response) => {
        setName("");
        setEmail("");
        setResume();
        setPhone("");
        setInstitution("");
        setCity("");
        setReason("");
        setExperience("");
        setRemarks("");
        setIsSubmitted(true);
      });
    } else {
      const resumeFileName = email + "_" + v4();
      const resumeRef = ref(storage, `resumes/${resumeFileName}`);
      uploadBytes(resumeRef, resume).then(() => {
        const data = {
          Name: name,
          Email: email,
          ResumeFileName: resumeFileName,
          PhoneNumber: phone,
          Institution: institution,
          cityOfResidence: city,
          Reason: reason,
          PreviousExperience: experience,
          AdditionalRemarks: remarks === "" ? "-" : remarks,
        };
        setName("");
        setEmail("");
        setResume();
        setPhone("");
        setInstitution("");
        setCity("");
        setReason("");
        setExperience("");
        setRemarks("");
        axios
          .post("https://sheet.best/api/sheets/cc278d92-0a6d-4eee-a757-80fef92278bf", data)
          .then((response) => {
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
          });
      });
    }
  };

  const outsidePopupClickHandler = () => {
    setWrong(false);
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
      <div className={`${styles["submission-confirmation"]} ${isSubmitted ? "" : styles["hide"]}`}>
        <div className={styles["confirmation-content"]}>
          <p>
            We have successfully received your submission. 
            Rest assured, you can expect to receive additional details regarding your internship application in the coming days.
          </p>
          <button
            className={styles["close-button"]}
            onClick={() => {
              setIsSubmitted(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    )}
      {wrong && (
        <div
          className={styles["popup-container"]}
          onClick={outsidePopupClickHandler}
        >
          <div
            className={styles["popup"]}
            onClick={insidePopupClickHandler}
          >
            <p>Invalid Data Entered</p>{" "}
            <button
              onClick={() => {
                setWrong(false);
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
