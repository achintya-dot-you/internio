import React from "react";
import { Link } from "react-router-dom";

import styles from "./PartnersHighlight.module.scss";

import Threco from "../../assets/images/PartnersHighlight/Threco.svg";
import Ayika from "../../assets/images/PartnersHighlight/Ayika.svg";
import Studo from "../../assets/images/PartnersHighlight/Studo.svg";

const PartnersHighlight = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>
        We partner with <span>companies</span> to provide <span>practical</span> and{" "}
        <span>hands-on</span> experience.
      </h2>
      <h3 className={styles["sub-heading"]}>Some of our partners:</h3>
      <div className={styles["image-container"]}>
        <picture className={styles["threco-picture"]}>
          <img
            srcSet={Threco}
            alt='threco'
            loading='lazy'
            className={styles["threco-image"]}
          />
        </picture>
        <picture className={styles["ayika-picture"]}>
          <img
            srcSet={Ayika}
            alt='ayika'
            loading='lazy'
            className={styles["ayika-image"]}
          />
        </picture>
        <picture className={styles["studo-picture"]}>
          <img
            srcSet={Studo}
            alt='studo'
            loading='lazy'
            className={styles["studo-image"]}
          />
        </picture>
      </div>
      <Link
        to={"/opportunities"}
        className={styles["button"]}
      >
        More Opportunities
      </Link>
    </div>
  );
};

export default PartnersHighlight;
