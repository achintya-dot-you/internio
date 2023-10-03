import React from "react";

import styles from "./OpportunitiesHeader.module.scss";
import { Link } from "react-router-dom";

const OpportunitiesHeader = (props) => {
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
          <Link
            to='/opportunities'
            className={`${styles["btn"]} ${styles["btn-filled"]}`}
            onClick={() => {
              props.scrollHandler();
            }}
          >
            Get Started
          </Link>
        </div>
      </header>
    </div>
  );
};

export default OpportunitiesHeader;
