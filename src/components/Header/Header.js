// ** Imports **
// Importing React
import React from "react";

// Importing Styles
import styles from "./Header.module.scss";

// ** Main Component **
const Header = () => {
  // Function that handles clicks on opportunities button
  const opportunitiesClickHandler = (event) => {
    event.preventDefault();
    window.location.href = window.location.origin + "/opportunities";
  };

  // Function that handles clicks on resources button
  const resourcesClickHandler = (event) => {
    event.preventDefault();
    window.location.href = window.location.origin + "/resources";
  };

  // ** JSX **
  return (
    // Container
    <div className={styles["header-container"]}>
      <header className={styles["header"]}>
        {/* Text content */}
        <div className={styles["text"]}>
          {/* Main Heading */}
          <h1 className={styles["heading"]}>
            <span className={styles["header-line-1"]}>Quality internships,</span>
            <span className={styles["header-line-2"]}>for students like you.</span>
          </h1>

          {/* Subheading */}
          <h3 className={styles["desc"]}>
            <span className={styles["desc-line-1"]}>
              Explore a new world of internship opportunities,
            </span>
            <span className={styles["desc-line-2"]}>
              curated for motivated and driven high school students.
            </span>

            {/* This line shows in phone, but not in bigger screens for better layout */}
            <span className={styles["desc-line-all"]}>
              Explore a new world of internship opportunities, curated for motivated and driven high
              school students.
            </span>
          </h3>
        </div>

        {/* Buttons */}
        <div className={styles["cta"]}>
          <button
            type='link'
            className={`${styles["btn"]} ${styles["btn-filled"]}`}
            onClick={opportunitiesClickHandler}
          >
            opportunities
          </button>
          <button
            type='link'
            className={`${styles["btn"]} ${styles["btn-outline"]}`}
            onClick={resourcesClickHandler}
          >
            resources
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
