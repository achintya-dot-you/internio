import React from "react";

import styles from "./Header-Image.module.scss";

import image from "../../assets/images/header-image.png";

const HeaderImage = () => {
  return (
    <div className={styles["headerImage"]}>
      <img
        src={image}
        alt='Man working on computer'
        className={styles["header__image"]}
      />
    </div>
  );
};

export default HeaderImage;
