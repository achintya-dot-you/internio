import React from "react";

import NavLink from "./NavLink";
import NavDropDown from "./NavDropDown";

import styles from "./PhoneNavbarDropdown.module.scss";

const PhoneNavbarDropdown = (props) => {
  const list = (
    <div className={styles["navbar"]}>
      <ul className={styles["navbar__list"]}>
        <NavDropDown
          title='About'
          phone={props.phone ? "phone" : "default"}
        >
          <NavLink
            link='/mission'
            title='Our Misson'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
          <NavLink
            link='/team'
            title='Our Team'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
        </NavDropDown>
        <NavLink
          link='/resources'
          title='Resources'
          type='standard'
          phone={props.phone ? "phone" : "default"}
        />
      </ul>
    </div>
  );

  return <div className={styles["list"]}>{list}</div>;
};

export default PhoneNavbarDropdown;
