import React from "react";

import styles from "./Header-Content.module.scss";

const HeaderContent = () => {
  return (
    <div className={styles["headerContent"]}>
      <h1 className={styles["header__heading"]}>
        Empowering Future Leaders, <br />
        One Step at a Time.
      </h1>
      <button className={styles["header__button"]}>Check out our Oppurtunities</button>
    </div>
  );
};

export default HeaderContent;
