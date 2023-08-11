import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import NavLink from "./NavLink";
import NavDropDown from "./NavDropDown";
import PhoneNavbarDropdown from "./PhoneNavbarDropdown";

import iconImage from "../../assets/images/icon.png";

const Navbar = (props) => {
  const [phoneToggled, setPhoneToggled] = useState(false);
  const [icon, setIcon] = useState(faBars);

  const handleNavbarToggle = () => {
    setPhoneToggled(!phoneToggled);
    console.log(!phoneToggled);
  };

  useEffect(() => {
    setIcon(phoneToggled ? faX : faBars);
  }, [phoneToggled]);

  const list = (
    <ul className={styles["navbar__list"]}>
      <NavDropDown
        title='Opportunities'
        phone='default'
      >
        <NavLink
          link='/'
          title='Option 2'
          type='dropdown'
          phone='default'
        />
        <NavLink
          link='/'
          title='Long Option 1'
          type='dropdown'
          phone='default'
        />
      </NavDropDown>

      <NavDropDown
        title='Opportunities'
        phone='default'
      >
        <NavLink
          link='/'
          title='Option 2'
          type='dropdown'
          phone='default'
        />
        <NavLink
          link='/'
          title='Long Option 1'
          type='dropdown'
          phone='default'
        />
      </NavDropDown>
      <NavLink
        link='/opportunities'
        title='Opportunities'
        type='standard'
        phone='default'
      />
      <NavDropDown
        title='Opportunities'
        phone='default'
      >
        <NavLink
          link='/'
          title='Option 2'
          type='dropdown'
          phone='default'
        />
        <NavLink
          link='/'
          title='Long Option 1'
          type='dropdown'
          phone='default'
        />
      </NavDropDown>
    </ul>
  );

  return (
    <>
      <div className={styles["navbar"]}>
        <FontAwesomeIcon
          onClick={handleNavbarToggle}
          icon={icon}
          className={styles["navbar-toggler"]}
        />
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
          {list}
        </div>
        {/* <div className={styles["action-container"]}>
          <button
            type='button'
            className={styles["sign-in"] + " " + styles["button"]}
          >
            Sign In
          </button>
          <button
            type='button'
            className={styles["sign-up"] + " " + styles["button"]}
          >
            Sign Up
          </button>
        </div> */}
      </div>

      {phoneToggled && <PhoneNavbarDropdown phone={phoneToggled} />}
    </>
  );
};

export default Navbar;
