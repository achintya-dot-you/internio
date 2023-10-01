import React from "react";
import { Link } from "react-router-dom";

import styles from "./ResourcesHighlight.module.scss";

const ResourcesHighlight = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h2 className={styles["heading"]}>
          Unlock Your Potential with Our <span>Internship Resources</span>
        </h2>
        <p className={styles["sub-heading"]}>
          Explore a wealth of resources designed to empower you on your internship journey.
        </p>
        <Link to={"/resources"} className={styles["button"]}>
          Discover Resources
        </Link>
      </div>
    </div>
  );
};

export default ResourcesHighlight;
