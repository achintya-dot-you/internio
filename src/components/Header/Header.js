import React from "react";

import styles from "./Header.module.scss";

const Header = () => {
  const opportunitiesClickHandler = (event) => {
    event.preventDefault();
    window.location.href = window.location.origin + "/opportunities";
  };

  const resourcesClickHandler = (event) => {
    event.preventDefault();
    window.location.href = window.location.origin + "/resources";
  };

  return (
    <div className={styles["header-container"]}>
      <header className={styles["header"]}>
        <div className={styles["text"]}>
          <h1 className={styles["heading"]}>
            <span className={styles["header-line-1"]}>Quality internships,</span>
            <span className={styles["header-line-2"]}>for students like you.</span>
          </h1>
          <h3 className={styles["desc"]}>
            <span className={styles["desc-line-1"]}>
              Explore a new world of internship opportunities,
            </span>
            <span className={styles["desc-line-2"]}>
              curated for motivated and driven high school students.
            </span>
            <span className={styles["desc-line-all"]}>
              Explore a new world of internship opportunities, curated for motivated and driven high
              school students.
            </span>
          </h3>
        </div>
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
