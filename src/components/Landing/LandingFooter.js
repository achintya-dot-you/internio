import React from "react";

import styles from "./LandingFooter.module.scss";

const LandingFooter = () => {
  return (
    <div className={styles["footer"]}>
      <ul className={styles["social-links-list"]}>
        <li>
          <a href='https://www.linkedin.com/company/internio/'>LinkedIn</a>
        </li>
        <li>
          <a href='https://github.com/internio/internio-main'>Instagram</a>
        </li>
        <li>
          <a href='https://github.com/internio/internio-main'>Twitter</a>
        </li>
        <li>
          <a href='https://github.com/internio/internio-main'>GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default LandingFooter;
