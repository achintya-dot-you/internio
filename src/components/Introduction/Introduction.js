import React from "react";

import styles from "./Introduction.module.scss";

import image from "../../assets/images/Introduction/Image.svg";

const Introduction = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <h2 className={styles["heading"]}>
          <span className={styles["blue"]}>A bit about</span> internio
        </h2>
        <p className={styles["para-1"] + " " + styles["para"]}>
          internio is a non-profit organization comitted to providing quality internships to
          motivated and driven high school students.
        </p>
        <p className={styles["para-2"] + " " + styles["para"]}>
          We are a team of high school and college students from across the world who are passionate
          about making a difference through technology.
        </p>
      </div>
      <div className={styles["image-container"]}>
        <picture className={styles["image-picture"]}>
          <img
            srcSet={image}
            alt='collaboraters'
            loading='lazy'
            className={styles["image"]}
          />
        </picture>
      </div>
    </div>
  );
};

export default Introduction;
