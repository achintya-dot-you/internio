import React from "react";

import HeaderContent from "./Header-Content";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <HeaderContent />
    </header>
  );
};

export default Header;
