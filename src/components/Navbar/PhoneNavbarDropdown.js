import React from "react";

import NavLink from "./NavLink";
import NavDropDown from "./NavDropDown";

import styles from "./PhoneNavbarDropdown.module.scss";

import data from "../../data/Navbar.json";

const PhoneNavbarDropdown = (props) => {
  const list = (
    <div className={styles["navbar"]}>
      <ul className={styles["navbar__list"]}>
        {data.map((item) => {
          if (item.type === "dropdown") {
            return (
              <NavDropDown
                title={item.title}
                phone={props.phone ? "phone" : "default"}
              >
                {item.links.map((link) => (
                  <NavLink
                    link={link.link}
                    title={link.title}
                    type={link.type}
                    phone={props.phone ? "phone" : "default"}
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
                phone={props.phone ? "phone" : "default"}
              />
            );
          }
        })}
      </ul>
    </div>
  );

  return <div className={styles["list"]}>{list}</div>;
};

export default PhoneNavbarDropdown;
