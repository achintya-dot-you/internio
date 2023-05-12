import React from "react";

import HeaderContent from "./Header-Content";
import HeaderImage from "./Header-Image";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <HeaderContent />
      <HeaderImage />
    </header>
  );
};

export default Header;
