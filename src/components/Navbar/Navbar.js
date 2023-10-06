// ** Imports **
// Importing React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Importing Styles
import styles from "./Navbar.module.scss";

// Importing Data
import data from "../../data/Navbar.json";

// Importing Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

// Importing components
import NavLink from "./NavLink";
import NavDropDown from "./NavDropDown";
import PhoneNavbarDropdown from "./PhoneNavbarDropdown";

// Importing Images
import iconImage from "../../assets/images/icon.png";

// ** Main Component **
const Navbar = (props) => {
  // ** Setting states for phone
  const [phoneToggled, setPhoneToggled] = useState(false);
  const [icon, setIcon] = useState(faBars);

  // ** Function that toggles the navbar in phone **
  const handleNavbarToggle = () => {
    setPhoneToggled(!phoneToggled);
    console.log(!phoneToggled);
  };

  // Changing icons in navbar toggle
  useEffect(() => {
    setIcon(phoneToggled ? faX : faBars);
  }, [phoneToggled]);

  // ** Creating a list of Navlinks and NavDropdowns using the data **
  const list = (
    <ul className={styles["navbar__list"]}>
      {data.map((item) => {
        if (item.type === "dropdown") {
          return (
            <NavDropDown
              key={item.title}
              title={item.title}
              phone='default'
            >
              {item.links.map((link) => (
                <NavLink
                  link={link.link}
                  title={link.title}
                  type={link.type}
                  key={link.title}
                  phone='default'
                />
              ))}
            </NavDropDown>
          );
        } else {
          return (
            <NavLink
              link={item.link}
              title={item.title}
              type={item.type}
              key={item.title}
              phone='default'
            />
          );
        }
      })}
    </ul>
  );

  // ** JSX **
  return (
    <>
      {/* Navbar Container */}
      <div className={styles["navbar"]}>
        {/* Toggler for phone */}
        <FontAwesomeIcon
          onClick={handleNavbarToggle}
          icon={icon}
          className={styles["navbar-toggler"]}
        />

        {/* Contains all the links */}
        <div className={styles["link-container"]}>
          {/* Navbar Header */}
          <div className={styles["navbar-links-container"]}>
            <h2 className={styles["navbar__header"]}>
              <Link to='/'>
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

            {/* All the other links */}
            {list}
          </div>
        </div>
      </div>

      {/* Showing a phone navbar if user is in a phone */}
      {phoneToggled && <PhoneNavbarDropdown phone={phoneToggled} />}
    </>
  );
};

export default Navbar;
