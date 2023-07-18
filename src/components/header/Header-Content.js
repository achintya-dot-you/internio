import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header-Content.module.scss";

import iconImage from "../../assets/images/icon.png";

const HeaderContent = () => {
  return (
    <div className={styles["headerContent"]}>
      <h1 className={styles["header__heading"]}>
        interni
        <img
          srcSet={iconImage}
          alt=''
          loading='lazy'
        ></img>
      </h1>

      <h2 className={styles["header__subheading"]}>empowering future leaders</h2>

      <Link
        to='/opportunities'
        className={styles["header__button"]}
      >
        view opportunities
      </Link>
    </div>
  );
};
export default HeaderContent;
