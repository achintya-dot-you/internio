import React from "react";

import HeaderContent from "./Header-Content";

import styles from "./Header.module.scss";
import headerImageDesktop from "../../assets/images/home-header-bg.jpg";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <picture className={styles["header-background"]}>
        <img
          srcSet={headerImageDesktop}
          alt=''
          loading='lazy'
          className={styles["landing_image_picture_desktop"]}
        />
      </picture>
      <HeaderContent />
    </header>
  );
};

export default Header;
