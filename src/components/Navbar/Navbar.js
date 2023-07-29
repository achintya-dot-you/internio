import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

import NavLink from "./NavLink";
import NavDropDown from "./NavDropDown";

import iconImage from "../../assets/images/icon.png";

const Navbar = (props) => {
  return (
    <div className={styles["navbar"]}>
      <svg
        focusable='false'
        className={styles["navbar__toggler"]}
      >
        <path
          fill='currentColor'
          d='M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z'
        />
      </svg>
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
