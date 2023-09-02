import React from "react";
import { Link } from "react-router-dom";

import styles from "./OpportunitiesCard.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faSackDollar } from "@fortawesome/free-solid-svg-icons";

const OpportunitiesCard = (props) => {
  return (
    <div
      className={`${styles["container"]} ${
        props.animationToggle === 1 ? styles["left"] : styles["right"]
      }`}
    >
      <div className={styles["top"]}>
        <h2 className={styles["heading"]}>
          {props.heading} {props.animationToggle}
        </h2>
        <picture className={styles["picture"]}>
          <img
            srcSet={props.imageURL}
            alt={props.alt}
            loading='lazy'
            className={styles["image"]}
          />
        </picture>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["details"]}>
          <div className={styles["detail"]}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={styles["icon"] + " " + styles["calendar"]}
            />
            <h4 className={styles["detail-key"]}>Term</h4>
            <h3 className={styles["detail-value"]}>{props.term}</h3>
          </div>
          <div className={styles["detail"]}>
            <FontAwesomeIcon
              icon={faClock}
              className={styles["icon"] + " " + styles["clock"]}
            />
            <h4 className={styles["detail-key"]}>Commitment</h4>
            <h3 className={styles["detail-value"]}>{props.commitment}</h3>
          </div>
          <div className={styles["detail"]}>
            <FontAwesomeIcon
              icon={faSackDollar}
              className={styles["icon"] + " " + styles["money"]}
            />
            <h4 className={styles["detail-key"]}>Stipend</h4>
            <h3 className={styles["detail-value"]}>{props.stipend}</h3>
          </div>
        </div>
        <Link
          to={"/opportunity/" + props.url}
          className={styles["button"]}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
