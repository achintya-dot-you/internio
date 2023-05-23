import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";

import CarouselCard from "./CarouselCard";

import styles from "./Carousel.module.scss";
import "../../styles/flickity.scss";

import opportunities from "../../data/opportunities.json";

const flickityOptions = {
  draggable: false,
  contain: true,
  wrapAround: true,
  autoPlay: false,
  accessibility: false,
  prevNextButtons: true,
  pageDots: false,
  adaptiveHeight: false,
  inititalIndex: 2,
};

console.log(
  opportunities.map((data) => {
    return (
      <CarouselCard
        key={data.id}
        title={data.title}
      />
    );
  })
);

const Carousel = () => {
  const flickityRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(2);
  const [carouselData, setCarouselData] = useState(
    opportunities.map((data) => {
      return (
        <CarouselCard
          key={data.id}
          title={data.title}
          className={data.id === currentSlide - 1 ? "active" : ""}
        />
      );
    })
  );

  useEffect(() => {
    const flickityInstance = new Flickity(flickityRef.current, flickityOptions);

    flickityInstance.on("select", () => {
      setCurrentSlide(flickityInstance.selectedIndex + 1);
      // }
    });

    return () => {
      flickityInstance.destroy();
    };
  }, []);

  useEffect(() => {
    console.log(currentSlide);
    setCarouselData(
      opportunities.map((data) => {
        return (
          <CarouselCard
            key={data.id}
            title={data.title}
            styles={
              (data.id === opportunities.length + 1 ? 1 : data.id) === currentSlide ? "active" : ""
            }
          />
        );
      })
    );
  }, [currentSlide]);

  return (
    <>
      <div className={styles["carouselContainer"]}>
        <div
          ref={flickityRef}
          className={styles["carousel"]}
        >
          {carouselData}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>Current Slide: {currentSlide}</div>
    </>
  );
};

export default Carousel;
