import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navlink.module.scss";

const NavLink = (props) => {
  const handleUserClick = () => {
    window.location.href = window.location.origin + props.link;
  };

  return (
    <>
      {props.type === "standard" && (
        <li
          className={`${styles["link"]} ${styles[`link-standard`]} ${
            styles[`link-${props.phone}`]
          } ${styles[`link-standard-${props.phone}`]}`}
        >
          <Link to={props.link}>{props.title}</Link>
        </li>
      )}
      {props.type === "dropdown" && (
        <li
          className={`${styles["link"]} ${styles[`link-dropdown`]} ${
            styles[`link-${props.phone}`]
          } ${styles[`link-dropdown-${props.phone}`]}`}
          onClick={handleUserClick}
        >
          <Link to={props.link}>{props.title}</Link>
        </li>
      )}
    </>
  );
};

export default NavLink;
