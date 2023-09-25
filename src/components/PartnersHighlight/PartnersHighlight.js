// ** Imports **
// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing Styles
import styles from "./PartnersHighlight.module.scss";

// Importing Images
import Threco from "../../assets/images/PartnersHighlight/Threco.svg";
import Ayika from "../../assets/images/PartnersHighlight/Ayika.svg";
import tmhs from "../../assets/images/PartnersHighlight/Studo.svg";

// ** Main Component **
// This component is to show our 3 best partnerships in the home page
const PartnersHighlight = () => {
  // ** Redirect Handlers for every partner - if clicked **
  const redirectHandlerAyika = () => {
    document.location.href = "https://ayikafoundation.org/";
  };

  const redirectHandlerThreco = () => {
    document.location.href = "https://threco.com/";
  };

  const redirectHandlerTMHS = () => {
    document.location.href = "https://www.teenmentalhealthsociety.org/";
  };

  // ** JSX **
  return (
    // Container
    <div className={styles["container"]}>
      {/* Main HEading */}
      <h2 className={styles["heading"]}>
        We partner with <span>companies</span> to provide <span>practical</span> and{" "}
        <span>hands-on</span> experience.
      </h2>

      {/* Subheading */}
      <h3 className={styles["sub-heading"]}>Some of our partners:</h3>

      {/* Image List */}
      <div className={styles["image-container"]}>
        {/* Threco */}
        <picture
          className={styles["threco-picture"]}
          onClick={redirectHandlerThreco}
        >
          <img
            srcSet={Threco}
            alt='threco'
            loading='lazy'
            className={styles["threco-image"]}
          />
        </picture>

        {/* Ayika */}
        <picture
          className={styles["ayika-picture"]}
          onClick={redirectHandlerAyika}
        >
          <img
            srcSet={Ayika}
            alt='ayika'
            loading='lazy'
            className={styles["ayika-image"]}
          />
        </picture>

        {/* Teen Mental Health Soceity */}
        <picture
          className={styles["tmhs-picture"]}
          onClick={redirectHandlerTMHS}
        >
          <img
            srcSet={tmhs}
            alt='Teen Mental Health Soceity'
            loading='lazy'
            className={styles["tmhs-image"]}
          />
        </picture>
      </div>

      {/* Button */}
      <Link
        to={"/opportunities"}
        className={styles["button"]}
      >
        All Opportunities
      </Link>
    </div>
  );
};

export default PartnersHighlight;
