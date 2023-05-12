import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header-Content.module.scss";

const HeaderContent = () => {
  return (
    <div className={styles["headerContent"]}>
      <h1 className={styles["header__heading"]}>
        Empowering Future Leaders, <br />
        One Step at a Time.
      </h1>

      <Link
        to='/oppurtunities'
        className={styles["header__button"]}
      >
        Oppurtunities
      </Link>
    </div>
  );
};

export default HeaderContent;
