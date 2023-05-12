import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <h2 className={styles["navbar__header"]}>
        <Link to='/'>internio.</Link>
      </h2>
      <ul className={styles["navbar__list"]}>
        <li className={styles["navbar__list__item"]}>
          <Link to='/oppurtunities'>Oppurtunities</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
