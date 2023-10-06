import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./NavDropDown.module.scss";

const NavDropDown = (props) => {
  const dropdownRef = useRef(null);
  const [shouldShow, setShouldShow] = useState(false);
  const [icon, setIcon] = useState(
    <FontAwesomeIcon
      icon={faChevronDown}
      className={styles["link-icon"]}
    />
  );

  const handleMouseEnter = () => {
    setShouldShow(true);
  };

  const handleMouseLeave = () => {
    setShouldShow(false);
  };

  useEffect(() => {
    // Change the icon based on the shouldShow state
    setIcon(
      <FontAwesomeIcon
        icon={shouldShow ? faChevronUp : faChevronDown}
        className={styles["link-icon"]}
      />
    );
  }, [shouldShow]);

  const handlePhoneClick = () => {
    setShouldShow(!shouldShow);
  };

  return (
    <>
      {props.phone === "phone" && (
        <div
          className={`${styles["container"]} ${styles["container-phone"]}`}
          onClick={handlePhoneClick}
        >
          <li className={`${props.style} ${styles["link"]} ${styles["link-" + props.phone]}`}>
            <h5>{props.title}</h5>
            {icon}
          </li>
          {shouldShow && (
            <>
              <div
                ref={dropdownRef}
                className={styles["list-container-phone"]}
              >
                <div
                  ref={dropdownRef}
                  className={styles["list-phone"]}
                >
                  {props.children}
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {props.phone !== "phone" && (
        <div
          className={styles["container"]}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className={`${props.style} ${styles["link"]} ${styles["link-" + props.phone]}`}>
            <h5>{props.title}</h5>
            {icon}
          </li>
          {shouldShow && (
            <div
              ref={dropdownRef}
              className={styles["list-container"]}
            >
              <div
                ref={dropdownRef}
                className={styles["list"]}
              >
                {props.children}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavDropDown;
