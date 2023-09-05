import React from "react";
import { useParams } from "react-router-dom";

import styles from "./OpportunitiesDetails.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const OpportunitiesDetails = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        <h1>Chapter Head</h1>
        <h2>About {id}</h2>
        <p>Bro this orange, its ginamosorous, giganomorous</p>
        <h2>Job Description</h2>
        <ul>
          <li>
            <p>Recruiting new personnel based on PHYSICA's needs</p>
          </li>
          <li>
            <p>Overseeing the work of all other volunteers</p>
          </li>
          <li>
            <p>Ideation and execution of all events</p>
          </li>
          <li>
            <p>
              Overseeing the creation of PHYSICA’s digital magazine, details:
              https://docs.google.com/document/d/1eu-7Oi5Ij3RnXV3Ramrtm-X3RCbFhmo6NPWD8z4PdFg/edit?usp=sharing
            </p>
          </li>
          <li>
            <p>Moderating the Discord Server if necessary</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Responsiveness on Discord in 48 hours, UNLESS you have informed the Head and the other
              Exec about your availability for the given time period
            </p>
          </li>
          <li>
            <p>Clear communication about your abilities within a given week</p>
          </li>
          <li>
            <p>Constant research and proofreading of work, done by other members</p>
          </li>
          <li>
            <p>Must be communicable, empathetic and adaptable.</p>
          </li>
          <li>Minimum 4 hour / week commitment. Can range to 6+ during high-volume weeks.</li>
          <li>
            <p>
              Must be available from now until Summer 2024 at the very least. If you are a high
              school senior, think about your availability seriously.
            </p>
          </li>
        </ul>
        <a
          href={"https://www.google.com"}
          className={styles["button"]}
        >
          Apply Now
        </a>
        <p>or email us at hiring@internio.app with your resume and the job you’re applying for!</p>
      </div>
      <Footer />
    </>
  );
};

export default OpportunitiesDetails;
