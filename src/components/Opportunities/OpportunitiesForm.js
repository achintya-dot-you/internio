import React, { useState, useEffect, useReducer } from "react";

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
const phonePattern = /^(\d{10}|\d{11}|\d{12}|\d{13})$/;

const checkPhone = (string) => {
  return phonePattern.test(string.replace(/[+.\-() ]/g, ""));
};

const FORM_ACTIONS = {
  CHANGE_NAME: "change-name",
  CHANGE_EMAIL: "change-email",
  CHANGE_PHONE: "change-phone",
  CHANGE_INSTITUTION: "change-institution",
  CHANGE_CITY: "change-city",
  CHANGE_REASON: "change-reason",
  CHANGE_EXPERIENCE: "change-experience",
  CHANGE_RESUME: "change-resume",
  CLEAR_RESUME: "clear-resume",
  CHANGE_REMARKS: "change-remarks",
  RESET_FIELDS: "reset-fields",
};

const formDefaultState = {
  name: "",
  email: "",
  phone: "",
  institution: "",
  city: "",
  reason: "",
  experience: "",
  resume: null,
  remarks: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.CHANGE_NAME:
      return { ...state, name: action.payload };
    case FORM_ACTIONS.CHANGE_PHONE:
      return { ...state, phone: action.payload };
    case FORM_ACTIONS.CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case FORM_ACTIONS.CHANGE_INSTITUTION:
      return { ...state, institution: action.payload };
    case FORM_ACTIONS.CHANGE_CITY:
      return { ...state, city: action.payload };
    case FORM_ACTIONS.CHANGE_REASON:
      return { ...state, reason: action.payload };
    case FORM_ACTIONS.CHANGE_EXPERIENCE:
      return { ...state, experience: action.payload };
    case FORM_ACTIONS.CHANGE_RESUME:
      return { ...state, resume: action.payload };
    case FORM_ACTIONS.CLEAR_RESUME:
      return { ...state, resume: null };
    case FORM_ACTIONS.CHANGE_REMARKS:
      return { ...state, remarks: action.payload };
    case FORM_ACTIONS.RESET_FIELDS:
      return formDefaultState;
    default:
      return state;
  }
};

const OpportunitiesForm = ({ company, position }) => {
  const [formState, dispatchForm] = useReducer(formReducer, formDefaultState);
  const [isWrong, setIsWrong] = useState(false);
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [isPhoneWrong, setIsPhoneWrong] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading");
  const collectionRef = collection(db, "formResponses");

  const isValid = () => {
    if (
      formState.name.trim() === "" ||
      formState.institution.trim() === "" ||
      formState.city.trim() === "" ||
      formState.reason.trim() === "" ||
      formState.experience.trim() === "" ||
      !emailPattern.test(formState.email) ||
      !checkPhone(formState.phone)
    ) {
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!emailPattern.test(formState.email)) {
      setIsEmailWrong(true);
    }
    if (emailPattern.test(formState.email)) {
      setIsEmailWrong(false);
    }
    if (formState.email.trim() === "") {
      setIsEmailWrong(false);
    }
  };

  const validatePhone = () => {
    if (!checkPhone(formState.phone)) {
      setIsPhoneWrong(true);
    }
    if (checkPhone(formState.phone)) {
      setIsPhoneWrong(false);
    }
    if (formState.phone.trim() === "") {
      setIsPhoneWrong(false);
    }
  };

  const resetStates = () => {
    dispatchForm({ type: FORM_ACTIONS.RESET_FIELDS });
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
      if (formState.resume) {
        resumeFileName = formState.email + "_" + v4();
        const resumeRef = ref(storage, `resumes/${resumeFileName}`);
        await uploadBytes(resumeRef, formState.resume);
      }

      const currentDate = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        timeZone: "America/New_York",
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const formattedDate = formatter.format(currentDate);

      const data = {
        Name: formState.name.trim(),
        Email: formState.email.trim(),
        ResumeFileName: resumeFileName.trim(),
        PhoneNumber: "no: " + formState.phone.trim(),
        Institution: formState.institution.trim(),
        CityOfResidence: formState.city.trim(),
        Reason: formState.reason.trim(),
        PreviousExperience: formState.experience.trim(),
        AdditionalRemarks: formState.remarks === "" ? "-" : formState.remarks.trim(),
        Position: position,
        Company: company,
        DateAndTime: formattedDate,
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
                dispatchForm({ type: FORM_ACTIONS.CHANGE_NAME, payload: e.target.value });
              }}
              value={formState.name}
            />
            <OpportunitiesInput
              label='Phone Number'
              type='tel'
              required={true}
              onChange={(e) => {
                dispatchForm({ type: FORM_ACTIONS.CHANGE_PHONE, payload: e.target.value });
                if (isPhoneWrong) {
                  if (checkPhone(formState.phone)) {
                    setIsPhoneWrong(false);
                  }
                }
              }}
              value={formState.phone}
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
                dispatchForm({ type: FORM_ACTIONS.CHANGE_EMAIL, payload: e.target.value });
                if (emailPattern.test(formState.email)) {
                  setIsEmailWrong(false);
                }
              }}
              value={formState.email}
              onBlur={validateEmail}
            >
              <>{isEmailWrong && <p className={styles["error-text"]}>Invalid Email Entered</p>}</>
            </OpportunitiesInput>
            <OpportunitiesInput
              label='What institution do you attend?'
              type='text'
              required={true}
              onChange={(e) => {
                dispatchForm({ type: FORM_ACTIONS.CHANGE_INSTITUTION, payload: e.target.value });
              }}
              value={formState.institution}
            />
            <OpportunitiesInput
              label='City of Residence'
              type='text'
              required={true}
              onChange={(e) => {
                dispatchForm({ type: FORM_ACTIONS.CHANGE_CITY, payload: e.target.value });
              }}
              value={formState.city}
            />
            <div className={styles["field"] + " " + styles["required"]}>
              <label>Why do you want to join {company}?</label>
              <textarea
                autoComplete='off'
                required
                rows='4'
                onChange={(e) => {
                  dispatchForm({ type: FORM_ACTIONS.CHANGE_REASON, payload: e.target.value });
                }}
                value={formState.reason}
              />
            </div>
            <div className={styles["field"] + " " + styles["required"]}>
              <label>List any previous experience you have with the related field.</label>
              <textarea
                autoComplete='off'
                required
                rows='4'
                onChange={(e) => {
                  dispatchForm({ type: FORM_ACTIONS.CHANGE_EXPERIENCE, payload: e.target.value });
                }}
                value={formState.experience}
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
                      dispatchForm({
                        type: FORM_ACTIONS.CHANGE_RESUME,
                        payload: e.target.files[0],
                      });
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
                      dispatchForm({ type: FORM_ACTIONS.CLEAR_RESUME });
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
              {formState.resume !== null && formState.resume !== undefined && (
                <span className={styles["resume-display"]}>{formState.resume.name}</span>
              )}
            </div>
            <div className={styles["field"]}>
              <label>Additional Remarks</label>
              <textarea
                autoComplete='off'
                rows='3'
                onChange={(e) => {
                  dispatchForm({ type: FORM_ACTIONS.CHANGE_REMARKS, payload: e.target.value });
                }}
                value={formState.remarks}
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
