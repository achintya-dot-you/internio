import React from "react";
import { Link } from "react-router-dom";

import styles from "./ResourcesHighlight.module.scss";

const ResourcesHighlight = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["headings"]}>
        <h2 className={styles["heading"]}>
          Resources to help you with <span>your extracurriculars</span>
        </h2>
        <h2 className={styles["sub-heading"]}>+ much more</h2>
      </div>
      <Link
        to={"/resources"}
        className={styles["button"]}
      >
        Discover Resources
      </Link>
    </div>
  );
};

export default ResourcesHighlight;
