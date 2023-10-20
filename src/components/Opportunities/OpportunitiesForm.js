import React, { useState, useEffect } from "react";

import { db, storage } from "../../firebase_setup/firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

import styles from "./OpportunitiesForm.module.scss";

import OpportunitiesInput from "./OpportunitiesInput";

import { v4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash, faX } from "@fortawesome/free-solid-svg-icons";

import iconImage from "../../assets/images/icon.png";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]{8,14}$/g;

const OpportunitiesForm = ({ company, position }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [city, setCity] = useState("");
  const [reason, setReason] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState();
  const [remarks, setRemarks] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [isPhoneWrong, setIsPhoneWrong] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading");
  const collectionRef = collection(db, "formResponses");

  const isValid = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      institution.trim() === "" ||
      city.trim() === "" ||
      reason.trim() === "" ||
      experience.trim() === "" ||
      !emailPattern.test(email) ||
      !phonePattern.test(phone)
    ) {
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!emailPattern.test(email)) {
      setIsEmailWrong(true);
    } else {
      setIsEmailWrong(false);
    }
  };

  const validatePhone = () => {
    if (!phonePattern.test(phone)) {
      setIsPhoneWrong(true);
    } else {
      setIsPhoneWrong(false);
    }
  };

  const resetStates = () => {
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
    setLoadingText("Loading");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValid()) {
      setIsLoading(true);
      setLoadingText("Loading");
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
        Position: position,
        Company: company,
      };

      try {
        await addDoc(collectionRef, data);
        resetStates();
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsWrong(true);
    }
  };

  const outsidePopupClickHandler = () => {
    setTimeout(() => {
      setIsWrong(false);
      setIsSubmitted(false);
    }, 1000);
  };

  const insidePopupClickHandler = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText === "Loading...") {
          return "Loading";
        } else {
          return prevText + ".";
        }
      });
    }, 500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={styles["loader-container"]}>
          <picture>
            <img
              srcSet={iconImage}
              alt=''
              loading='lazy'
              className={styles["loader"]}
            ></img>
          </picture>
        </div>
      )}
      {!isLoading && (
        <>
          <h2 className={styles["heading"]}>Fill out the details to apply</h2>
          <form
            autoComplete='off'
            className={styles["form"]}
          >
            <OpportunitiesInput
              label='Name'
              type='text'
              required={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <OpportunitiesInput
              label='Phone Number'
              type='tel'
              required={true}
              onChange={(e) => {
                setPhone(e.target.value);
                if (isPhoneWrong) {
                  if (phonePattern.test(phone)) {
                    setIsPhoneWrong(false);
                  }
                }
              }}
              value={phone}
              onBlur={validatePhone}
            >
              <>
                {isPhoneWrong && (
                  <p className={styles["error-text"]}>Invalid Phone Number Entered</p>
                )}
              </>
            </OpportunitiesInput>
            <OpportunitiesInput
              label='Email'
              type='text'
              required={true}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailWrong(!emailPattern.test(email));
              }}
              value={email}
              onBlur={validateEmail}
            >
              <>{isEmailWrong && <p className={styles["error-text"]}>Invalid Email Entered</p>}</>
            </OpportunitiesInput>
            <OpportunitiesInput
              label='What institution do you attend?'
              type='text'
              required={true}
              onChange={(e) => {
                setInstitution(e.target.value);
              }}
              value={institution}
            />
            <OpportunitiesInput
              label='City of Residence'
              type='text'
              required={true}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
            />
            <div className={styles["field"] + " " + styles["required"]}>
              <label>Why do you want to join {company}?</label>
              <textarea
                autoComplete='off'
                required
                rows='4'
                onChange={(e) => {
                  setReason(e.target.value);
                }}
                value={reason}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
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
            {!isLoading && (
              <button
                className={styles["button"]}
                onClick={handleSubmit}
              >
                Apply Now
              </button>
            )}
            {isLoading && <button className={styles["button"]}>{loadingText}</button>}
          </form>
        </>
      )}
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
