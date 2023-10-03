import React, { useState, useRef } from "react";

import Navbar from "../components/Navbar/Navbar";
import OpportunitiesList from "../components/Opportunities/OpportunitiesList";
import Footer from "../components/Footer/Footer";
import OpportunitiesHeader from "../components/Opportunities/OpportunitiesHeader";

import styles from "./Opportunities.module.scss";

import iconImage from "../assets/images/icon.png";

const Opportunities = () => {
  const [loading, setLoading] = useState(true);
  const opportunitiesListRef = useRef(null);

  const changeLoading = (bool) => {
    setLoading(bool);
  };

  const getStartedButtonHandler = () => {
    opportunitiesListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles["container"]}>
      {!loading && (
        <div>
          <Navbar />
          <OpportunitiesHeader scrollHandler={getStartedButtonHandler} />
        </div>
      )}
      <OpportunitiesList
        loader={changeLoading}
        id='opportunities'
        ref={opportunitiesListRef}
      />
      {!loading && (
        <div>
          <Footer />
        </div>
      )}
      {loading && (
        <div className={styles["loader-container"]}>
          <img
            srcSet={iconImage}
            alt=''
            loading='lazy'
            className={styles["loader"]}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Opportunities;
