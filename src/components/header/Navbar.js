import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={`${styles["navbar"]} ${styles[`navbar__${props.type}`]}`}>
      <h2 className={`${styles["navbar__header"]} ${styles[`navbar__${props.type}__header`]}`}>
        <Link to='/'>internio.</Link>
      </h2>
      <ul className={`${styles["navbar__list"]} ${styles[`navbar__${props.type}__list`]}`}>
        <li
          className={`${styles["navbar__list__item"]} ${
            styles[`navbar__${props.type}__list__item`]
          }`}
        >
          <Link to='/opportunities'>opportunities</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
