import React from "react";

import styles from "./LandingFooter.module.scss";

const LandingFooter = () => {
  return (
    <div className={styles["footer"]}>
      <ul className={styles["social-links-list"]}>
        <li>
          <a href='https://www.linkedin.com/company/internio/'>linkedin</a>
        </li>
        <li>
          <a href='https://www.instagram.com/internio.app/'>instagram</a>
        </li>
        <li>
          <a href='https://github.com/internio/internio-main'>twitter</a>
        </li>
        <li>
          <a href='https://github.com/achintya-dot-you/internio'>github</a>
        </li>
      </ul>
    </div>
  );
};

export default LandingFooter;
