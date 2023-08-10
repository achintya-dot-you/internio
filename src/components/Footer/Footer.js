import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["content"]}>
        <div className={styles["column"]}>
          <div className={styles["column-content"]}>
            <p className={styles["column-header"]}>SOCIALS</p>
            <div className={styles["links"]}>
              <a
                href='https://discord.gg/Usb95exFEc'
                className={styles["link"]}
              >
                DISCORD
              </a>
              <a
                href='https://www.instagram.com/internio.app/'
                className={styles["link"]}
              >
                INSTAGRAM
              </a>
              <a
                href='https://www.linkedin.com/company/internio/'
                className={styles["link"]}
              >
                LINKEDIN
              </a>
              <a
                href='https://github.com/achintya-dot-you/internio'
                className={styles["link"]}
              >
                GITHUB
              </a>
              <a
                href='mailto:team@internio.app'
                className={styles["link"]}
              >
                EMAIL
              </a>
            </div>
          </div>
        </div>
        <div className={styles["column"]}>
          <div className={styles["column-content"]}>
            <p className={styles["column-header"]}>ABOUT</p>
            <div className={styles["links"]}>
              <Link
                to={"/about"}
                className={styles["link"]}
              >
                ABOUT US
              </Link>
              <Link
                to={"/team"}
                className={styles["link"]}
              >
                TEAM
              </Link>
              <a
                href='https://internio.notion.site/Job-Board-f02cf790ddc944f1ab233c22cf44157e'
                className={styles["link"]}
              >
                CAREERS
              </a>
              <Link
                to={"/donate"}
                className={styles["link"]}
              >
                DONATE
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["column"]}>
          <div className={styles["column-content"]}>
            <p className={styles["column-header"]}>RESOURCES</p>
            <div className={styles["links"]}>
              <Link
                to={"/opportunities"}
                className={styles["link"]}
              >
                OPPORTUNITIES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
