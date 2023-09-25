// ** IMPORTS **
// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing Styles
import styles from "./Footer.module.scss";

// Importing Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Importing Images
import iconImage from "../../assets/images/icon-inverted.png";

// ** Main Component **
const Footer = () => {
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

      {/* Content in footer */}
      <div className={styles["content"]}>
        {/* First Column */}
        <div className={styles["column"]}>
          <div className={styles["column-content"]}>
            {/* Column Header */}
            <p className={styles["column-header"]}>SOCIALS</p>

            {/* Column Links */}
            <div className={styles["links"]}>
              <a
                href='https://discord.gg/Usb95exFEc'
                className={styles["link"]}
              >
                discord
              </a>
              <a
                href='https://www.instagram.com/internio.app/'
                className={styles["link"]}
              >
                instagram
              </a>
              <a
                href='https://www.linkedin.com/company/internio/'
                className={styles["link"]}
              >
                linkedIn
              </a>
              <a
                href='https://github.com/achintya-dot-you/internio'
                className={styles["link"]}
              >
                github
              </a>
              <a
                href='mailto:team@internio.app'
                className={styles["link"]}
              >
                email
              </a>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className={styles["column"]}>
          <div className={styles["column-content"]}>
            {/* Column Header */}
            <p className={styles["column-header"]}>ABOUT</p>

            {/* Column Links */}
            <div className={styles["links"]}>
              <Link
                to={"/about"}
                className={styles["link"]}
              >
                about us
              </Link>
              <Link
                to={"/team"}
                className={styles["link"]}
              >
                team
              </Link>
              <a
                href='https://internio.notion.site/Job-Board-f02cf790ddc944f1ab233c22cf44157e'
                className={styles["link"]}
              >
                careers
              </a>
              <Link
                to={"/donate"}
                className={styles["link"]}
              >
                donate
              </Link>
            </div>
          </div>
        </div>

        {/* 3rd Column */}
        <div className={styles["column"]}>
          <div className={styles["column-content"]}>
            {/* Column Header */}
            <p className={styles["column-header"]}>RESOURCES</p>

            {/* Column Links */}
            <div className={styles["links"]}>
              <Link
                to={"/opportunities"}
                className={styles["link"]}
              >
                opportunities
              </Link>
            </div>
          </div>
        </div>

        {/* 4th Column */}
        <div className={styles["column"]}>
          <div className={styles["column-content"]}>
            {/* Column Header */}
            <p className={styles["column-header"]}>HEADING</p>

            {/* Column Links */}
            <div className={styles["links"]}>
              <Link
                to={"/"}
                className={styles["link"]}
              >
                link 1
              </Link>
              <Link
                to={"/"}
                className={styles["link"]}
              >
                link 2
              </Link>
              <Link
                to={"/"}
                className={styles["link"]}
              >
                link 3
              </Link>
              <Link
                to={"/"}
                className={styles["link"]}
              >
                another link 3
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ending in footer */}
      <div className={styles["footer-row"]}>
        {/* Copyright text */}
        <p className={styles["copyright"]}>
          <span className={styles["symbol"]}>&copy;</span>
          <span className={styles["brand"]}>internio.app</span>
        </p>

        {/* Social List */}
        <div className={styles["socials"]}>
          <a href='https://discord.com/invite/Usb95exFEc'>
            <FontAwesomeIcon
              className={styles["icon"]}
              icon={faDiscord}
            />
          </a>
          <a href='https://www.instagram.com/internio.app/'>
            <FontAwesomeIcon
              className={styles["icon"]}
              icon={faInstagram}
            />
          </a>
          <a href='https://www.linkedin.com/company/internio/'>
            <FontAwesomeIcon
              className={styles["icon"]}
              icon={faLinkedin}
            />
          </a>
          <a href='https://github.com/achintya-dot-you/internio'>
            <FontAwesomeIcon
              className={styles["icon"]}
              icon={faGithub}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

// ** EXPORTING COMPONENT **
export default Footer;
