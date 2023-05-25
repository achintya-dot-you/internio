import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";

import CarouselCard from "./CarouselCard";

import styles from "./Carousel.module.scss";
import "../../styles/flickity.scss";

import opportunities from "../../data/opportunities.json";

const flickityOptions = {
  draggable: false,
  contain: true,
  autoPlay: 4000,
  accessibility: false,
  prevNextButtons: false,
  pageDots: false,
  adaptiveHeight: false,
  initialIndex: Math.floor(opportunities.length / 2),
  wrapAround: true,
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
  const [currentSlide, setCurrentSlide] = useState(Math.floor(opportunities.length / 2) + 1);
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
            active={
              (data.id === opportunities.length + 1 ? 1 : data.id) === currentSlide ? "active" : ""
            }
            display='show'
          />
        );
      })
    );
    const timeout = setTimeout(() => {
      setCarouselData(
        opportunities.map((data) => {
          var shouldShow = "hide";
          if (
            (data.id === opportunities.length + 1 ? 1 : data.id) === currentSlide ||
            (data.id === opportunities.length + 1 ? 1 : data.id) ===
              (currentSlide === 1 ? opportunities.length : currentSlide - 1) ||
            (data.id === opportunities.length + 1 ? 1 : data.id) ===
              (currentSlide === opportunities.length ? 1 : currentSlide + 1)
          ) {
            shouldShow = "show";
          }

          return (
            <CarouselCard
              key={data.id}
              title={data.title}
              active={
                (data.id === opportunities.length + 1 ? 1 : data.id) === currentSlide
                  ? "active"
                  : ""
              }
              display={shouldShow}
            />
          );
        })
      );
    }, 1); // 1 second timeout

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles["carouselContainer"]}>
        <div
          ref={flickityRef}
          className={styles["carousel"] + " carousel"}
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Carousel;
