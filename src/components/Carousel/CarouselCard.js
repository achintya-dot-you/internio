import React from "react";

import styles from "./CarouselCard.module.scss";

const CarouselCard = (props) => {
  return (
    <div className={styles["card"]}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default CarouselCard;
