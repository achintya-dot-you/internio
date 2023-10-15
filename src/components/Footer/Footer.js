// ** IMPORTS **
// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing Styles
import styles from "./Footer.module.scss";

// Importing Data
import columnData from "../../data/Footer/Columns.json";
import socialsData from "../../data/Footer/Socials.json";

// Importing Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Importing Images
import iconImage from "../../assets/images/icon-inverted.png";

// Mapping Icons to Strings
const icons = {
  faGithub,
  faDiscord,
  faInstagram,
  faLinkedin,
};

// ** Main Component **
const Footer = () => {
  const columns = (
    <div className={styles["content"]}>
      {columnData.map((column) => {
        return (
          <div
            className={styles["column"]}
            key={column.header}
          >
            <div className={styles["column-content"]}>
              <p className={styles["column-header"]}>{column.header}</p>

              <div className={styles["links"]}>
                {column.links.map((link) => {
                  if (link.url.startsWith("internio/")) {
                    return (
                      <Link
                        to={link.url.substring("internio".length)}
                        className={styles["link"]}
                        key={link.title}
                      >
                        {link.title}
                      </Link>
                    );
                  } else {
                    return (
                      <a
                        href={link.url}
                        className={styles["link"]}
                        key={link.title}
                      >
                        {link.title}
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const socials = (
    <div className={styles["socials"]}>
      {socialsData.map((link) => {
        return (
          <a
            href={link.url}
            key={link.name}
          >
            <FontAwesomeIcon
              className={styles["icon"]}
              icon={icons[link.iconName]}
            />
          </a>
        );
      })}
    </div>
  );

  // ** JSX **
  return (
    <div className={styles["footer"]}>
      {/* Icon in footer */}
      <h1 className={styles["heading"]}>
        <p className={styles["heading-text"]}>interni</p>

        <img
          srcSet={iconImage}
          alt=''
          loading='lazy'
          className={styles["heading-icon"]}
        ></img>
      </h1>

      {columns}

      {/* Ending in footer */}
      <div className={styles["footer-row"]}>
        {/* Copyright text */}
        <p className={styles["copyright"]}>
          <span className={styles["symbol"]}>&copy;</span>
          <span className={styles["brand"]}>
            internio.app |&nbsp;
            <a href='mailto:team@internio.app'>team@internio.app</a>
          </span>
        </p>

        {/* Social List */}
        {socials}
      </div>
    </div>
  );
};

// ** EXPORTING COMPONENT **
export default Footer;
