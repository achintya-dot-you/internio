// ** Imports **
// Importing React
import React from "react";

// Importing Styles
import styles from "./Introduction.module.scss";

// Importing Graphics
import image from "../../assets/images/Introduction/Image.svg";

// ** Main components **
// This component tells users a little about internio.
const Introduction = () => {
  // ** JSX **
  return (
    // Container
    <div className={styles["container"]}>
      {/* Left part - text side */}
      <div className={styles["content-container"]}>
        {/* Heading for the text part */}
        <h2 className={styles["heading"]}>
          <span className={styles["blue"]}>A bit about</span> internio
        </h2>

        {/* Paragraph 1 */}
        <p className={styles["para-1"] + " " + styles["para"]}>
          internio is a non-profit organization committed to providing quality internships to
          motivated and driven high school students.
        </p>

        {/* Paragraph 2 */}
        <p className={styles["para-2"] + " " + styles["para"]}>
          We are a team of high school and college students from across the world who are passionate
          about making a difference.
        </p>
      </div>

      {/* Right side - graphics sides */}
      <div className={styles["image-container"]}>
        {/* Adding a picture from undraw */}
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

// ** Exporting Component **
export default Introduction;
