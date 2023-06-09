import React from "react";

import styles from "./OpportunityCard.module.scss";

const OpportunityCard = (props) => {
  const applyButtonHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["card-details"]}>
        <h1 className={styles["title"]}>{props.title}</h1>
        <p className={styles["subject"]}>
          {props.description.substring(0, 600) + (props.description.length > 600 ? "..." : "")}
        </p>
      </div>

      <img
        className={styles["image"]}
        src={props.image}
        alt={props.alt}
        onClick={applyButtonHandler}
      />
    </div>
  );
};

export default OpportunityCard;
