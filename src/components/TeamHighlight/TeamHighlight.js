import React from "react";
import { Link } from "react-router-dom";

import styles from "./TeamHighlight.module.scss";

import dummyPic from "../../assets/images/team/dummy1.jpg";

const TeamHighlight = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["pictures"]}>
        <div className={styles["achintya"]}>
          <picture>
            <img
              srcSet={dummyPic}
              alt='Achintya'
              loading='lazy'
              className={styles["picture"]}
            />
          </picture>

          <div className={styles["intro"]}>
            <h2 className={styles["name"]}>Achintya</h2>
            <p className={styles["description"]}>
              Driven by a deep passion to revolutionize high school internships, Achintya laid the
              cornerstone of internio.
            </p>
          </div>
        </div>
        <div className={styles["arnav"]}>
          <picture>
            <img
              srcSet={dummyPic}
              alt='Arnav'
              loading='lazy'
              className={styles["picture"]}
            />
          </picture>
          <div className={styles["intro"]}>
            <h2 className={styles["name"]}>Arnav</h2>
            <p className={styles["description"]}>
              Adding another layer of expertise to internio, Arnav’s work in web development has
              been crucial in propelling our organsation.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["details"]}>
        <h2 className={styles["heading"]}>Meet the founders</h2>
        <div className={styles["paragraphs"]}>
          <p className={styles["text"]}>
            At internio, our journey began with a shared vision and a passion for empowering high
            school students.
          </p>
          <p className={styles["text"]}>
            Meet the brilliant minds who transformed this vision into reality and continue to steer
            the course toward innovation and success.
          </p>
        </div>
        <Link
          to={"/team"}
          className={styles["button"]}
        >
          Our Team
        </Link>
      </div>
    </div>
  );
};

export default TeamHighlight;
