import React from "react";

import styles from "./Mission.module.scss";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import data from "../data/Mission.json";

const Mission = () => {
  return (
    <>
      <Navbar />
      <div className={styles["mission-container"]}>
        <h2 className={styles["mission-heading"]}>Our Mission</h2>
        <p className={styles["mission-text"]}>{data.text}</p>
      </div>
      <Footer />
    </>
  );
};

export default Mission;
