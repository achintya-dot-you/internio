import React from "react";

import NavLink from "./NavLink";
import NavDropDown from "./NavDropDown";

import styles from "./PhoneNavbarDropdown.module.scss";

const PhoneNavbarDropdown = (props) => {
  const list = (
    <div className={styles["navbar"]}>
      <ul className={styles["navbar__list"]}>
        <NavLink
          link='/opportunities'
          title='Opportunities'
          type='standard'
          phone={props.phone ? "phone" : "default"}
        />
        <NavDropDown
          title='About'
          phone={props.phone ? "phone" : "default"}
        >
          <NavLink
            link='/'
            title='Option 2'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
          <NavLink
            link='/'
            title='Long Option 1'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
        </NavDropDown>
        <NavDropDown
          title='About'
          phone={props.phone ? "phone" : "default"}
        >
          <NavLink
            link='/'
            title='Option 2'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
          <NavLink
            link='/'
            title='Long Option 1'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
        </NavDropDown>
        <NavDropDown
          title='About'
          phone={props.phone ? "phone" : "default"}
        >
          <NavLink
            link='/'
            title='Option 2'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
          <NavLink
            link='/'
            title='Long Option 1'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
        </NavDropDown>
        <NavDropDown
          title='About'
          phone={props.phone ? "phone" : "default"}
        >
          <NavLink
            link='/'
            title='Option 2'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
          <NavLink
            link='/'
            title='Long Option 1'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
        </NavDropDown>
        <NavDropDown
          title='About'
          phone={props.phone ? "phone" : "default"}
        >
          <NavLink
            link='/'
            title='Option 2'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
          <NavLink
            link='/'
            title='Long Option 1'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
        </NavDropDown>
        <NavDropDown
          title='About'
          phone={props.phone ? "phone" : "default"}
        >
          <NavLink
            link='/'
            title='Option 2'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
          <NavLink
            link='/'
            title='Long Option 1'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
        </NavDropDown>
        <NavDropDown
          title='About'
          phone={props.phone ? "phone" : "default"}
        >
          <NavLink
            link='/'
            title='Option 2'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
          <NavLink
            link='/'
            title='Long Option 1'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
        </NavDropDown>
        <NavDropDown
          title='About'
          phone={props.phone ? "phone" : "default"}
        >
          <NavLink
            link='/'
            title='Option 2'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
          <NavLink
            link='/'
            title='Long Option 1'
            type='dropdown'
            phone={props.phone ? "phone" : "default"}
          />
        </NavDropDown>
      </ul>
    </div>
  );

  return <div className={styles["list"]}>{list}</div>;
};

export default PhoneNavbarDropdown;
