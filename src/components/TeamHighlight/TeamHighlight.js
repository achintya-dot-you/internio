// ** Imports **
// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing Styles
import styles from "./TeamHighlight.module.scss";

// Importing Pictures
import arnav from "../../assets/images/team/arnav.jpg";
import achintya from "../../assets/images/team/achintya.jpg";

// ** Main Component **
// This component is the highlight to the team page in the homepage.
const TeamHighlight = () => {
  // ** JSX **
  return (
    // Container
    <div className={styles["container"]}>
      {/* Pictures Part - In Left */}
      <div className={styles["pictures"]}>
        {/* Achintya */}
        <div className={styles["achintya"]}>
          <picture>
            <img
              srcSet={achintya}
              alt='Achintya'
              loading='lazy'
              className={styles["picture"]}
            />
          </picture>

          <div className={styles["intro"]}>
            <h2 className={styles["name"]}>Achintya</h2>
            <p className={styles["description"]}>
              Driven by a deep passion to revolutionize high school internships, Achintya laid the
              cornerstone of internio.
            </p>
          </div>
        </div>

        {/* Arnav */}
        <div className={styles["arnav"]}>
          <picture>
            <img
              srcSet={arnav}
              alt='Arnav'
              loading='lazy'
              className={styles["picture"]}
            />
          </picture>
          <div className={styles["intro"]}>
            <h2 className={styles["name"]}>Arnav</h2>
            <p className={styles["description"]}>
              Motivated to innovate high school internships, Arnav played a key role in shaping
              internio's tech foundation.
            </p>
          </div>
        </div>
      </div>

      {/* Details Part - In Right */}
      <div className={styles["details"]}>
        {/* Header */}
        <h2 className={styles["heading"]}>MEET THE FOUNDERS</h2>

        {/* Details */}
        <div className={styles["paragraphs"]}>
          <p className={styles["text"]}>
            At internio, our journey began with a shared vision and a passion for empowering high
            school students.
          </p>
          <p className={styles["text"]}>
            Meet the brilliant minds who transformed this vision into reality and continue to steer
            the course toward innovation and success.
          </p>
        </div>
        {/* Button */}
        <Link
          to={"/team"}
          className={styles["button"]}
        >
          Our Team
        </Link>
      </div>
    </div>
  );
};

export default TeamHighlight;
