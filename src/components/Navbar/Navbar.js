import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

import NavLink from "./NavLink";
import NavDropDown from "./NavDropDown";

import iconImage from "../../assets/images/icon.png";

const Navbar = (props) => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["link-container"]}>
        <h2 className={styles["navbar__header"]}>
          <Link to='/home'>
            <span className={styles["navbar__header__container"]}>
              interni
              <img
                srcSet={iconImage}
                alt=''
                loading='lazy'
                className={styles["navbar__header__image"]}
              ></img>
            </span>
          </Link>
        </h2>
        <ul className={styles["navbar__list"]}>
          <NavLink
            link='/opportunities'
            title='opportunities'
            type='standard'
          />
          <NavDropDown title='about'>
            <NavLink
              link='/'
              title='Option 2'
              type='dropdown'
            />
            <NavLink
              link='/'
              title='Long Option 1'
              type='dropdown'
            />
          </NavDropDown>
        </ul>
      </div>
      <div className={styles["action-container"]}>
        <button
          type='button'
          className={styles["sign-in"] + " " + styles["button"]}
        >
          sign in
        </button>
        <button
          type='button'
          className={styles["sign-up"] + " " + styles["button"]}
        >
          sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
