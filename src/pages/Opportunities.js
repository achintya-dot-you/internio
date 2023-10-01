import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import OpportunitiesList from "../components/Opportunities/OpportunitiesList";
import Footer from "../components/Footer/Footer";
import OpportunitiesHeader from "../components/Opportunities/OpportunitiesHeader";

import styles from "./Opportunities.module.scss";

import iconImage from "../assets/images/icon.png";

const Opportunities = () => {
  const [loading, setLoading] = useState(true);

  const changeLoading = (bool) => {
    setLoading(bool);
  };

  return (
    <>
      {!loading && (
        <div>
          <Navbar />
          <OpportunitiesHeader />{" "}
        </div>
      )}
      <OpportunitiesList loader={changeLoading} />
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
    </>
  );
};

export default Opportunities;
