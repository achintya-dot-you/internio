import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navlink.module.scss";

const NavLink = (props) => {
  return (
    <>
      {props.type === "standard" && (
        <li className={`${styles["link"]} ${styles[`link-${props.type}`]}`}>
          <Link to={props.link}>{props.title}</Link>
        </li>
      )}
      {props.type === "dropdown" && (
        <li className={`${styles["link"]} ${styles[`link-${props.type}`]}`}>
          <Link to={props.link}>{props.title}</Link>
        </li>
      )}
    </>
  );
};

export default NavLink;
