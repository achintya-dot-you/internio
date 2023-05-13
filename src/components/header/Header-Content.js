import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header-Content.module.scss";

const HeaderContent = () => {
  return (
    <div className={styles["headerContent"]}>
      <h1 className={styles["header__heading"]}>
        empowering future leaders, <br />
        one step at a time.
      </h1>

      <Link
        to='/oppurtunities'
        className={styles["header__button"]}
      >
        view oppurtunities :)
      </Link>
    </div>
  );
};
export default HeaderContent;
