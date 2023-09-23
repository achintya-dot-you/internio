import React from "react";

import styles from "./OpportunitiesHeader.module.scss";

const OpportunitiesHeader = () => {
  const opportunitiesClickHandler = (event) => {
    event.preventDefault();
    window.location.href = window.location.origin + "/opportunities";
  };

  return (
    <div className={styles["header-container"]}>
      <header className={styles["header"]}>
        <div className={styles["text"]}>
          <h1 className={styles["heading"]}>
            <span className={styles["header-line-2"]}>OPPORTUNITIES</span>
          </h1>
          <h3 className={styles["desc"]}>
            <span className={styles["desc-line-1"]}>
              Explore a world of internships across diverse fields
            </span>
            <span className={styles["desc-line-all"]}>
              Explore a world of internships across diverse fields
            </span>
          </h3>
        </div>
        <div className={styles["cta"]}>
          <button
            type='link'
            className={`${styles["btn"]} ${styles["btn-filled"]}`}
            onClick={opportunitiesClickHandler}
          >
            Get Started
          </button>
        </div>
      </header>
    </div>
  );
};

export default OpportunitiesHeader;
