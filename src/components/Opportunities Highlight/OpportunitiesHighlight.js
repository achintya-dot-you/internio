import React from "react";

import styles from "./OpportunitiesHighlight.module.scss";

import flashcardsImage from "../../assets/images/opportunities-flashcards.svg";

const OpportunitiesHighlight = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["flashcards-container"]}>
        <picture className={styles["flashcards-picture"]}>
          <img
            srcSet={flashcardsImage}
            alt=''
            loading='lazy'
            className={styles["flashcards-image"]}
          />
        </picture>
      </div>
      <div className={styles["details-container"]}>
        <p className={styles["details-note"]}>
          small<span>-</span>group sessions
        </p>
        <h2 className={styles["details-heading"]}>
          Catch up or learn something new in small groups.
        </h2>
        <p className={styles["details-paragraph"]}>
          Join other learners like you to prepare for the upcoming SAT
          <sup>®</sup>, refresh on math concepts, get ahead for your next school year, and more
          <span>!</span>
        </p>
        <button
          type='button'
          className={styles["details-btn"]}
        >
          Explore Subjects
        </button>
      </div>
    </div>
  );
};

export default OpportunitiesHighlight;
