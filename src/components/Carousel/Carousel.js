import React from "react";

import CarouselCard from "./CarouselCard";

import styles from "./Carousel.module.scss";

const Carousel = () => {
  return (
    <div className={styles["carousel"]}>
      <CarouselCard title='Example'></CarouselCard>
      <h1>akldfjasd;lkfj</h1>
    </div>
  );
};

export default Carousel;
